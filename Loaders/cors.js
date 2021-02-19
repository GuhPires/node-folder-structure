// Enforces CORS policy and allows only whitelisted origins
// Works by dependency injection in order to be used as middleware
const cors = require('cors');

module.exports = (app) => {
	// List of authorized domains
	const whitelist = ['http://localhost:3001', 'http://127.0.0.1:5500'];
	// CORS options (see https://www.npmjs.com/package/cors)
	const options = {
		origin: whitelist,
	};
	// Enabling CORS pre-flight
	app.options('*', cors(options));
	// CORS enabled for every route
	app.use(cors(options));
};
