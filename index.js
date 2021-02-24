const express = require('express');
const app = express();
// Routes
const apiRoutes = require('./routes');
// Configuration
const KEYS = require('./config/keys');

// Loaders
require('./loaders').load(app);

// Middlewares
app
	.use(express.json())
	.use('*', require('./middlewares/request'))
	.use('/api', apiRoutes)
	.use(require('./middlewares/errorHandler'));

// Subscribers
require('./subscribers/email.sub').subscribe();

// Handling all unknown routes (main application)
app.all('*', async (req, res) => {
	res.status(404).send('PAGE NOT FOUND!');
});

// Starting the server
app.listen(KEYS.PORT, () => {
	console.log('------------------------');
	console.log('PORT: ', KEYS.PORT);
	console.log('PID: ', process.pid);
	console.log('========================');
});
