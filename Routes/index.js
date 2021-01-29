// This file import ALL ROUTES inside of a given folder (in this case is "./"),
// independently of how many existing routes the application has.
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
// Express Router
const router = require('express').Router();

// Specifing which folder should be read
const ROUTES_PATH = path.join(__dirname);
// Transforming to async intead of using callbacks
const readirAsync = promisify(fs.readdir);

// Create a Home page for /api
router.get('/', async (req, res) => {
	res.send('THIS IS THE API HOME PAGE!');
});

// Read files IIFE
(async () => {
	try {
		const files = await readirAsync(ROUTES_PATH);
		const notFoundRoutes = 'notFound.routes.js';
		// Files that shouldn't be required
		const excluded = ['index.js', notFoundRoutes];
		// Filter all excluded files
		const filtered = files.filter((file) => excluded.indexOf(file) === -1);
		// Adding not found route at the end of the array (avoids declaring it
		// before other routes)
		[...filtered, notFoundRoutes]
			// Requiring dynamically all routes with dependency injection
			.map((file) => require('./' + file)(router))
			// Using route middleware to specify the correct path that
			// the route should be applied to
			.forEach((route) => router.use(route));
	} catch (err) {
		console.error('Something BAD happened...\n -> ', err);
	}
})();

module.exports = router;
