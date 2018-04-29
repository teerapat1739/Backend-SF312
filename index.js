const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')    //เรียกใช้ mongoose

const PORT = 3009
const routes = require('./routes')


// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://piya-db:96CXOBxNJXzLxvkbCXvxDWtQHn4XKkXpZ0CSwwXgYU1OTG2kFfZL6DxYMXjNzxiW0uS9tDW5DK3xtG3sIOPrJA==@piya-db.documents.azure.com:10255/?ssl=true&replicaSet=globaldb', {
//     useMongoClient: true
// });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
routes(app)

// app.listen(PORT,  () => {
//     console.log('ready server on http://localhost:' + PORT)
// })