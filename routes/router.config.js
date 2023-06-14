const authRouter = require('./auth.routes')
const appRoutes = require('./routes')

function apiRoutes(app) {
    app.use('', appRoutes);
    app.use('/auth', authRouter);
}

module.exports = apiRoutes;