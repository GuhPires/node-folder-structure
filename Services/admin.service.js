const Service = require('./index');
const Admin = require('../Models/Admin');

class AdminService extends Service {
	constructor(model) {
		super(model);
	}

	// Create custom or override methods
	// OBS: You can alway call 'super()'
	// in order to execute the parent's
	// method and then implement your
	// own logic when overriding it.
}

module.exports = new AdminService(Admin);
