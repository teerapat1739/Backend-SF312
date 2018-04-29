const User = require('../models/user.model')  
const jwt = require('jwt-simple')   
const config = require('../config') 

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode(
        {
            sub: user._id,  
            user_type: user.user_type,
            name: user.name,
            username: user.username,
            iat: timestamp
        },
        config.secret   
    )
}


exports.signin = (req, res, next) => {
    res.send({ token: tokenForUser(req.user) })
}

exports.findAll = (req, res, next) => {
    var query = req.query.term
   
    User.find({
        $or: [{ name: new RegExp(query) },
        { username: new RegExp(query) }]
    }, (err, results) => {
        if (err) { return next(err) }   

        res.json(results)   
    })
}

exports.findById = (req, res, next) => {
   
    User.findById(req.params.id, function (err, results) {
        if (err) { return next(err) }  

        res.json(results)  
    })
}


exports.create = (req, res, next) => {
    User.findOne({ username: req.body.username }, (err, result) => {
        if (err) { return next(err); }

        if (result) {
            res.json({ status: 201, message: 'Username is Duplicate' })
        } else {
            
            const user = new User(req.body)
            user.save(err => {
                if (err) { return next(err) }

                res.json(user)
            })
        }
    })
}

exports.update = (req, res, next) => {
    var id = req.params.id  

    
    User.findOne({ username: req.body.username }, (err, results) => {
        if (err) { return next(err) }   

        var isUpdate = false;
        if (results) {
          
            if (results._id.toString() !== id) {
                res.send({ status: 201, message: 'Username is Duplicate' })
            } else {
                isUpdate = true
            }
        } else {
            isUpdate = true
        }

        if (isUpdate) {
            User.findOneAndUpdate({ _id: id }, req.body, { new: true }, (err, user) => {
                if (err) {
                    return next(err)
                } else {
                    res.json(user)
                }
            })
        }
    })
}

exports.delete = (req, res, next) => {
    User.findByIdAndRemove(req.params.id, (err, result) => {
        if (err) {
            return next(err)
        } else {
            res.json(result)
        }
    })
}