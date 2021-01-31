// This class is only used to create a unique EventEmitter instance
// using the Singleton design pattern.
const { EventEmitter } = require('events');

class Emitter extends EventEmitter {
	constructor() {
		super();
		if (Emitter.instance) {
			return Emitter.instance;
		}
		Emitter.instance = this;
	}
}

module.exports = Emitter;
