
const Qrcode = require('../models/qrcode.model') 
exports.findAll = (req, res, next) => {
    var query = req.query.term
    Qrcode.find( {username: new RegExp(query) }, (err, results) => {
        if (err) { return next(err) } 
        res.json(results) 
    })
}

exports.findById = (req, res, next) => {
   
    Qrcode.findById(req.params.id, function (err, results) {
        if (err) { return next(err) } 
        res.json(results) 
    })
}
exports.create = (req, res, next) => {
    console.log(req.body);
    Qrcode.findOne({ username: req.body.username }, (err, result) => {
        if (err) { return next(err); }
        if (result) {
            res.json({ status: 201, message: 'Username is Duplicate' })
        } else {
           
            const qrcode = new Qrcode(req.body)
            console.log(qrcode);
            qrcode.save(err => {
                
                if (err) { return next(err) }
               
                res.json(qrcode)
            })
        }
    })
}

exports.update = (req, res, next) => {
    console.log(req.body);
    
    var uname = req.params.id 
    console.log(uname);
    
    Qrcode.findOne({ username: uname }, (err, results) => {
        if (err) { return next(err) } 
        var isUpdate = false;
        console.log(results.credit - req.body.credit);
        console.log(req.body);
        var data =  {
            credit: results.credit - req.body.credit
        }
       
        if (results) {
           
            if (results.username !== uname) {
                res.send({ status: 201, message: 'Username is Duplicate' })
            } else if ((results.credit - req.body.credit ) <= 0 ) {
                res.send({ status: 201, message: 'Username Money not enought' })
            } else {
                isUpdate = true
            }
        } else {
            isUpdate = true
        }
        if (isUpdate) {
            Qrcode.findOneAndUpdate({ username: uname }, data, { new: true }, (err, user) => {
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
    Qrcode.findByIdAndRemove(req.params.id, (err, result) => {
        if (err) {
            return next(err)
        } else {
            res.json(result)
        }
    })
}