// Models communicates with the Database of the application (by an
// ORM or not), you can also mock data and create methods to
// consume them in here in order to test some functionality.
//
// The implementation bellow is just an example, here you can use
// ORMs like sequelize and Mongoose to create Schemas and all that
// kind of things. I am just using classes to illustrate what could
// be done. OBS: If you're using some ORM you probably won't need this
// 'index.js' file.

const Seed = require('../data/seed');

module.exports = class Model {
	constructor(collection) {
		this.collection = collection;
	}

	async find(data) {
		console.log('MODEL FIND');
		// The uncommented return statement is only an example,
		// you should use something like
		// return await this.collection.find(); instead
		return Seed[this.collection];
	}

	async create(data) {
		console.log('MODEL CREATE');
		// The uncommented return statement is only an example,
		// you should use something like
		// return await this.collection.create(); instead
		return Seed[this.collection];
	}

	async update(data) {
		console.log('MODEL UPDATE');
		// The uncommented return statement is only an example,
		// you should use something like
		// return await this.collection.update(); instead
		return Seed[this.collection];
	}

	async destroy(data) {
		console.log('MODEL DESTROY');
		// The uncommented return statement is only an example,
		// you should use something like
		// return await this.collection.destroy(); instead
		return Seed[this.collection];
	}
};
