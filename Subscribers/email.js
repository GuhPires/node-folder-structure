const Emitter = require('../Subscribers');
const emitter = new Emitter();

// Event functionality
const sendEmail = () => console.log('Sending Email from SUB...');

module.exports = {
	subscribe: () => {
		emitter.on('customEvent', sendEmail);
		emitter.on('anotherEvent', () => console.log('ANOTHER EVENT FIRED!'));
		// More events...
	},
};
