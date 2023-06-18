const uri = "mongodb+srv://JundaJagad:JundaJagad2201@JundaJagad.x5niwpz.mongodb.net/?retryWrites=true&w=majority";
const express = require('express');
const app = express();
const PORT = 2000;
const mongoose = require('mongoose');
const cors = require('cors')
app.use(cors())
app.use(express.json())

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const connect = async () => {
    try {
        mongoose.connect(uri);
        console.log('Connected to mongoDB!')
    } catch (error) {
        throw error
    } 
}



mongoose.connection.on('disconnected', ()=>{
    console.log('MongoDB disconnected!')
});


app.listen(PORT, () => {
    connect()
    console.log(`Server is running on port ${PORT}`);
  });