const express = require('express');
const cors = require('cors');
const coordinate_router = require('./Feature/Coordinate/coordinate.router');
const messageAt404 = require('./Feature/PageNotFound/pagenotfound.controller');
const Routes = require('./constants/routes');

const app = express();

app.use(express.json());
app.set('json spaces', 2);
app.disable('etag');
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(Routes.COORDINATE, coordinate_router);

// Handle unknown routes
app.use(messageAt404);

// Handle body-parser errors
app.use((err, req, res, next) => {
	if (err.type === 'entity.parse.failed') {
		return res.status(400).json({
			message: 'invalid data',
			errors: { body: 'is malformed' },
		});
	}
	next(err);
});

// Handle unexpected errors
app.use((err, req, res, next) => {
	res.status(500).json({
		code: 500,
		message: 'Something went wrong',
	});
});

module.exports = app;
