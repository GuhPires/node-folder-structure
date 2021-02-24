const Controller = require('./index');
const AdminService = require('../services/admin.service');

class AdminController extends Controller {
	constructor(service) {
		super(service);
	}

	// Create custom or override methods
	// OBS: You can alway call 'super()'
	// in order to execute the parent's
	// method and then implement your
	// own logic when overriding it.
}

module.exports = new AdminController(AdminService);
