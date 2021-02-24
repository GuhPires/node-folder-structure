// This file loads all necessary middlewares and server's pre-start functions
const cors = require('./cors');

module.exports = {
	load: (app) => {
		console.log('========================');
		console.log('➥ Loading all loaders...');
		console.log('------------------------');
		// WARNING: The order DOES MATTER! Make sure to add the correct sequence of middlewares
		cors(app);
	},
};
