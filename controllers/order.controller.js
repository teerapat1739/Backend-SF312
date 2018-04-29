
const Order = require('../models/order.controller')

exports.findAll = (req, res, next) => {

    var query = req.query.term
    
    Order.find((err, results) => {
        if (err) { return next(err) } 
        console.log(results[0]);
        res.json(results) 
    })
}

exports.findById = (req, res, next) => {
  
    Order.findById(req.params.id, function (err, results) {
        if (err) { return next(err) } 
        res.json(results)
    })
}

exports.create = (req, res, next) => {
    
    Order.findOne({ username: req.body.username }, (err, result) => {
        if (err) { return next(err); }
        if (result) {
            
            res.json({ status: 201, message: 'Username is Duplicate' })
        } else {
           
            const order = new Order(req.body)
            order.save(err => {
                
                if (err) { return next(err) }
                
                res.json(order)
            })
        }
    })
}

exports.update = (req, res, next) => {
    var id = req.params.id 
   
    Order.findOne({ username: req.body.username }, (err, results) => {
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
            
            Order.findOneAndUpdate({ _id: id }, req.body, { new: true }, (err, user) => {
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
    Order.findByIdAndRemove(req.params.id, (err, result) => {
        if (err) {
            return next(err)
        } else {
            //ลบส�ำเร็จก็ส่ง javascript object ของ user ที่ถูกลบกลับไป
            res.json(result)
        }
    })
}