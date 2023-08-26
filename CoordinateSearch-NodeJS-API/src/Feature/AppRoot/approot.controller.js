const service = require('./approot.service');

function approotMainController(req, res) {
	return res.json(service.approotMessage());
}

module.exports = { approotMainController };
