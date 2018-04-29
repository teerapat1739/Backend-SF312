// const passport = require('passport')
// const passportService = require('./service/passport')

// //เรียกใช้ passport.authenticate แบบ local และกำหนด session เป็น false
// const requireSignin = passport.authenticate('local', { session: false })
// const requireAuth = passport.authenticate('jwt', { session: false })    //เรียกใช้ JwtStrategy

// const user = require('./controllers/user.controller')
const qrcode = require('./controllers/qrcode.controller')
// const order = require('./controllers/order.controller')

module.exports = function (app) {
    app.get('/api', function (req, res) {
        res.send('Service MongoDB' )
    })

    
    // app.post('/signin', requireSignin, user.signin)

    
    // app.get('/api/users',  requireAuth, user.findAll)
    // app.post('/api/users', requireAuth, user.create)
    // app.get('/api/users/:id', requireAuth, user.findById)
    // app.put('/api/users/:id', requireAuth, user.update)
    // app.delete('/api/users/:id', requireAuth, user.delete)

     app.get('/api/qrcode', qrcode.findAll)
     app.post('/api/qrcode', qrcode.create)
     app.get('/api/qrcode/:id', qrcode.findById)
     app.put('/api/qrcode/:id', qrcode.update)
     app.delete('/api/qrcode/:id', qrcode.delete)

    //  app.get('/api/order', order.findAll)
    //  app.post('/api/order', order.create)
    //  app.get('/api/order/:id', order.findById)
    //  app.put('/api/order/:id', order.update)
    //  app.delete('/api/order/:id', order.delete)

   
}