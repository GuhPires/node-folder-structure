// Request interceptor (it'll run before every request for every route)
const requestHandler = (req, res, next) => {
	// Creating some custom values accessible to all routes
	req.custom = 'Some Custom value shared into the Request Object.';
	// The 'next' function should be the last thing to be called
	next();
};

module.exports = requestHandler;
