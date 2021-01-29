const express = require('express');
const app = express();
// Routes
const apiRoutes = require('./Routes');
// Configuration
const KEYS = require('./Config/keys');

// Middlewares
// Request interceptor (it'll run before every request for every route)
const requestHandler = (req, res, next) => {
	// Creating some custom values accessible to all routes
	req.custom = 'Some Custom value shared into the Request Object.';
	// The 'next' function should be the last thing to be called
	next();
};

// Handling Errors into Application
const errorHandler = (err, req, res, next) => {
	console.log();
	console.error('ERROR!', err.message);
	console.log('METHOD:', req.method);
	console.log('PATH:', req.path);
	if (res.headersSent) {
		return next(err);
	}
	res.status(err.statusCode || 500).json({ err: true });
};

app
	.use(express.json())
	.use('*', requestHandler)
	.use('/api', apiRoutes)
	.use(errorHandler);

// Handling all unknown routes (main application)
app.all('*', async (req, res) => {
	res.status(404).send('PAGE NOT FOUND!');
});

// Starting the server
app.listen(KEYS.PORT, () => {
	console.log('========================');
	console.log('PORT: ', KEYS.PORT);
	console.log('PID: ', process.pid);
	console.log('========================');
});
