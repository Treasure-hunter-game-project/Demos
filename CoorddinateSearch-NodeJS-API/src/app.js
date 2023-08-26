const express = require('express');
const app = express();
const cors = require('cors');

//Constants
const Routes = require('./constants/routes');

//Routers
const approot_router = require('./Feature/AppRoot/approot.router');
const coordinate_router = require('./Feature/Coordinate/coordinate.router');

//Controllers
const messageAt404 = require('./Feature/PageNotFound/pagenotfound.controller');

app.use(express.json());
app.set('json spaces', 2);
app.disable('etag');
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// path /
app.use(Routes.ROOT, approot_router);

// path /coordinate
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
