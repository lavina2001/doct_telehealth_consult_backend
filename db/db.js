    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/doct', {

    }).then(() => {
        console.log('Database connected..')
    }).catch((error) => {
        console.log('connection error', error)
    })