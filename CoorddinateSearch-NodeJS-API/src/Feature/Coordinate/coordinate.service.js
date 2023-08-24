const searchByCoordinates = require('./coordinate.model');

function welcomeMessage() {
	return { message: 'WELOME ON COORDINATE' };
}

function getCoordinate(coordinate) {
	const result = searchByCoordinates(coordinate);
	return result;
}

module.exports = { welcomeMessage, getCoordinate };
