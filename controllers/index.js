// Controllers are used to handle requests from a given route
// and call the Service (where the business logic is located).
// Basically the controller "control" the flow and which services
// need to be called. Ex: Call a validator function, create a user
// then email the new user.
//
// The implementation bellow is class based since it can abstract
// common CRUD methods, which makes the application "DRYer" (DRY
// principle) by not repeating those methods in every controller
// when they basically do the same thing. Ex: in a function based
// controller, maybe 'getUser' and 'getAdmin' would do the exact
// same thing but using different services, with a base class this
// repetition is avoided. If some aditional functionality is
// needed, you can always override the parent's method or create
// a new method in the desired class (or in this base class if it
// should be shared among all other controllers).

module.exports = class Controller {
	constructor(service) {
		this.service = service;
	}

	async get(req, res, next) {
		try {
			// Do some param validation and
			// other kind of stuff
			console.log('CONTROLLER GET -> Validating data...');
			console.log('CONTROLLER GET -> Custom Req Data: ', req.custom);
			const data = await this.service.get();
			console.log('CONTROLLER GET -> Returning some response...');
			res.json(data);
		} catch (err) {
			// Call the express (or custom) error handler
			next(err);
		}
	}

	async create(req, res, next) {
		try {
			// Do some param validation and
			// other kind of stuff
			console.log('CONTROLLER CREATE -> Validating data...');
			console.log('CONTROLLER CREATE -> Custom Req Data: ', req.custom);
			const data = await this.service.create();
			console.log('CONTROLLER CREATE -> Returning some response...');
			res.json(data);
		} catch (err) {
			// Call the express (or custom) error handler
			next(err);
		}
	}

	async update(req, res, next) {
		try {
			// Do some param validation and
			// other kind of stuff
			console.log('CONTROLLER UPDATE -> Validating data...');
			console.log('CONTROLLER UPDATE -> Custom Req Data: ', req.custom);
			const data = await this.service.update();
			console.log('CONTROLLER UPDATE -> Returning some response...');
			res.json(data);
		} catch (err) {
			// Call the express (or custom) error handler
			next(err);
		}
	}

	async delete(req, res, next) {
		try {
			// Do some param validation and
			// other kind of stuff
			console.log('CONTROLLER DELETE -> Validating data...');
			console.log('CONTROLLER DELETE -> Custom Req Data: ', req.custom);
			const data = await this.service.delete();
			console.log('CONTROLLER DELETE -> Returning some response...');
			res.json(data);
		} catch (err) {
			// Call the express (or custom) error handler
			next(err);
		}
	}
};
