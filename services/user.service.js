const Service = require('./index');
const User = require('../models/User');

class UserService extends Service {
	constructor(model) {
		super(model);
	}

	// Create custom or override methods
	// OBS: You can alway call 'super()'
	// in order to execute the parent's
	// method and then implement your
	// own logic when overriding it.
}

module.exports = new UserService(User);
