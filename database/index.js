const mongoose = require('mongoose')

//regular function
async function connectToDatabase(){
    await mongoose.connect('mongodb+srv://shristipokharel:shristipokharel@cluster0.3oun9dm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log('Database connected successfully')
}

module.exports = connectToDatabase
