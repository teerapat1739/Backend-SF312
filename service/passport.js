const User = require('../models/user.model')  
const passport = require('passport');   
const LocalStrategy = require('passport-local') 

const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt

const config = require('../config')


const localLogin = new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, result) => {
        if (err) return next(err)   
        if (!result) return done(null, false)  

       
        if (result.password !== password) {
            return done(null, false)   
            return done(null, result)  
        }
    })
})


const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};


const jwtRoute = new JwtStrategy(jwtOptions, function (payload, done) {
    
    User.findById(payload.sub, (err, result) => {
        if (err) return done(err)
        if (!result) return done(null, false);   

        return done(null, result)   
    })
})

passport.use(localLogin)    
passport.use(jwtRoute)      