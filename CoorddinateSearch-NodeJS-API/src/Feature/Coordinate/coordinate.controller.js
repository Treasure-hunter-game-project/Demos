const service = require('./coordinate.service');

function welcomeMessage(req, res, next) {
	const message = service.welcomeMessage();
	return res.json(message);
}

function getCoordinate(req, res, next) {
	const coordinate = req.body.coordinate;
	const seachCoordinate = service.getCoordinate(coordinate);
	return res.json({ youSent: coordinate, weFound: seachCoordinate });
}

module.exports = {
	welcomeMessage,
	getCoordinate,
};
