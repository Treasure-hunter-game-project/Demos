const express = require('express');
const router = express.Router();
const controller = require('./approot.controller');
const Routes = require('../../constants/routes');

router.route(Routes.ROOT).get(controller.approotMainController);

module.exports = router;
