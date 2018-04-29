// const passport = require('passport')
// const passportService = require('./service/passport')

// //เรียกใช้ passport.authenticate แบบ local และกำหนด session เป็น false
// const requireSignin = passport.authenticate('local', { session: false })
// const requireAuth = passport.authenticate('jwt', { session: false })    //เรียกใช้ JwtStrategy

// const user = require('./controllers/user.controller')
// const qrcode = require('./controllers/qrcode.controller')
// const order = require('./controllers/order.controller')

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.send({ message: 'Service MongoDB' })
    })

    
    // app.post('/signin', requireSignin, user.signin)

    
    // app.get('/users',  requireAuth, user.findAll)
    // app.post('/users', requireAuth, user.create)
    // app.get('/users/:id', requireAuth, user.findById)
    // app.put('/users/:id', requireAuth, user.update)
    // app.delete('/users/:id', requireAuth, user.delete)

    //  app.get('/qrcode', qrcode.findAll)
    //  app.post('/qrcode', qrcode.create)
    //  app.get('/qrcode/:id', qrcode.findById)
    //  app.put('/qrcode/:id', qrcode.update)
    //  app.delete('/qrcode/:id', qrcode.delete)

    //  app.get('/order', order.findAll)
    //  app.post('/order', order.create)
    //  app.get('/order/:id', order.findById)
    //  app.put('/order/:id', order.update)
    //  app.delete('/order/:id', order.delete)

   
}