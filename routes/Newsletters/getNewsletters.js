const express = require('express');
const Newsletter = require('../../models/Newsletter');
const router = express.Router();
var url = require('url');

router.get('/', async (req, res) => {
	try {
        var url_parts = url.parse(req.url, true);
        var query = url_parts.query;
		const newsletters = await Newsletter.find().limit(6).skip((parseInt(query.page) - 1) *6);
		console.log(newsletters);
		return res.json(newsletters);
	} catch (err) {
		console.log(err);
		return res.send(500);
	}
});

module.exports = router;