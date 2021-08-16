const express = require('express');
const Podcast = require('../../models/Podcast');
const router = express.Router();
var url = require('url');

router.get('/', async (req, res) => {
	try {
        var url_parts = url.parse(req.url, true);
        var query = url_parts.query;
		const podcasts = await Podcast.find().limit(6).skip((parseInt(query.page) - 1) *6);
		console.log(podcasts);
		return res.json(podcasts);
	} catch (err) {
		console.log(err);
		return res.send(500);
	}
});

module.exports = router;