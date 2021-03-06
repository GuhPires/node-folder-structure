// See this folder's 'index.js' file for some observations.

const Model = require('./index');

class User extends Model {
	constructor() {
		super('users');
	}

	// Create custom or override methods
	// OBS: You can alway call 'super()'
	// in order to execute the parent's
	// method and then implement your
	// own logic when overriding it.
}

module.exports = new User();
