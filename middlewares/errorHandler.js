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

module.exports = errorHandler;
