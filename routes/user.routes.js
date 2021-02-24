const UserController = require('../controllers/user.controller');

module.exports = (router) => {
	const urlPath = '/user';

	return router
		.get(`${urlPath}/`, UserController.get.bind(UserController))
		.post(`${urlPath}/`, UserController.create.bind(UserController))
		.put(`${urlPath}/`, UserController.update.bind(UserController))
		.delete(`${urlPath}/`, UserController.delete.bind(UserController));
};
