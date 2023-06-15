const authRouter = require('./auth.routes');
const appRoutes = require('./routes');
const express = require('express')


function apiRoutes(app) {
    const router = express.Router();
    app.use('/api', router);
    router.use('/auth', authRouter);
    router.use('/', appRoutes);

}

module.exports = apiRoutes;