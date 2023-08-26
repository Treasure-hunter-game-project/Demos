const express = require('express');
const router = express.Router();
const controller = require('./coordinate.controller');
const Routes = require('../../constants/routes');

router
	.route(Routes.ROOT)
	.get(controller.welcomeMessage)
	.post(controller.getCoordinate);

module.exports = router;
