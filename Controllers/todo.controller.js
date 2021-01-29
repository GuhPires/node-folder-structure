const Controller = require('./index');
const TodoService = require('../Services/todo.service');

class TodoController extends Controller {
	constructor(service) {
		super(service);
	}

	// Create custom or override methods
	// OBS: You can alway call 'super()'
	// in order to execute the parent's
	// method and then implement your
	// own logic when overriding it.
}

module.exports = new TodoController(TodoService);
