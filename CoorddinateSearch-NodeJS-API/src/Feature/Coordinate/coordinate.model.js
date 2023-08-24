const Repository = require('./coordinate.repository');
const { calculateDistance } = require('../../Tools/calculators');
const config = require('../../constants/config');

function searchByCoordinates({ latitude, longitude }) {
	const filteredData = Repository.filter((item) => {
		const distance = calculateDistance(
			latitude,
			longitude,
			item.latitude,
			item.longitude,
		);
		return distance <= config.maxDistance;
	});

	return filteredData;
}

module.exports = searchByCoordinates;
