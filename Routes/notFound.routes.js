module.exports = (router) => {
	const urlPath = '*';

	// Handling all unknown routes (API routes)
	return router.all(`${urlPath}`, async (req, res) => {
		res.status(404).send('NOT FOUND!');
	});
};
