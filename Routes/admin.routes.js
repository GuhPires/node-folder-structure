const adminController = require('../Controllers/admin.controller');
const AdminController = require('../Controllers/admin.controller');

module.exports = (router) => {
	const urlPath = '/admin';

	return router
		.get(`${urlPath}/`, AdminController.get.bind(AdminController))
		.post(`${urlPath}/`, AdminController.create.bind(AdminController))
		.put(`${urlPath}/`, AdminController.update.bind(AdminController))
		.delete(`${urlPath}/`, AdminController.delete.bind(AdminController));
};
