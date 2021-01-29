const TodoController = require('../Controllers/todo.controller');

module.exports = (router) => {
	const urlPath = '/todo';

	return router
		.get(`${urlPath}/`, TodoController.get.bind(TodoController))
		.post(`${urlPath}/`, TodoController.create.bind(TodoController))
		.put(`${urlPath}/`, TodoController.update.bind(TodoController))
		.delete(`${urlPath}/`, TodoController.delete.bind(TodoController));
};
