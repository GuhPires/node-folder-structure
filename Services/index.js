// Services basically holds all of the business logic for the application,
//  n other words, it should "talk" to the Models or some external API.
//
// The implementation bellow is class based since it can abstract
// common CRUD methods, which makes the application "DRYer" (DRY
// principle) by not repeating those methods in every service
// when they basically do the same thing. Ex: in a function based
// service, maybe 'getUser' and 'getAdmin' would do the exact
// same thing but using different models, with a base class this
// repetition is avoided. If some aditional functionality is
// needed, you can always override the parent's method or create
// a new method in the desired class (or in this base class if it
// should be shared among all other services).
// OBS: The 'this.model.METHOD()' could be ANY desired ORM method,
// see the Models' 'index.js' file to an observation.
//
// You can improve it by using the Pub/Sub (Observer) design pattern
// to improve the separations of concerns of the application (See
// the 'Subscribers' folder to an example).
const Emitter = require('../Subscribers');
const emitter = new Emitter();

module.exports = class Service {
	constructor(model) {
		this.model = model;
	}

	async get(data) {
		// Do some business logic in here
		console.log('SERVICE GET -> Doing stuff...');
		const response = await this.model.find();
		// Here is a good place to emit an event
		emitter.emit('customEvent', response);
		return { msg: 'Here is some data...', data: response };
	}

	async create(data) {
		// Do some business logic in here
		console.log('SERVICE CREATE -> Doing stuff...');
		const response = await this.model.create();
		// Here is a good place to emit an event
		emitter.emit('customEvent', response);
		return { msg: 'Here is some data...', data: response };
	}

	async update(data) {
		// Do some business logic in here
		console.log('SERVICE UPDATE -> Doing stuff...');
		const response = await this.model.update();
		// Here is a good place to emit an event
		emitter.emit('customEvent', response);
		return { msg: 'Here is some data...', data: response };
	}

	async delete(data) {
		// Do some business logic in here
		console.log('SERVICE DELETE -> Doing stuff...');
		const response = await this.model.destroy();
		// Here is a good place to emit an event
		emitter.emit('customEvent', response);
		return { msg: 'Here is some data...', data: response };
	}
};
