// See this folder's 'index.js' file for some observations.

const Model = require('./index');

class Todo extends Model {
	constructor() {
		super('todos');
	}

	// Create custom or override methods
	// OBS: You can alway call 'super()'
	// in order to execute the parent's
	// method and then implement your
	// own logic when overriding it.
}

module.exports = new Todo();
