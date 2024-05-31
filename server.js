require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const UserRoute = require('./routes/user.route')


const app = express();
app.use(express.json());


const PORT = 5000;
const url = process.env.MONGODB_CONNECTION;
mongoose.connect(url);
const db = mongoose.connection;

db.on('error', () => {
    console.error("connection error");
})

db.once('open', () => {
    console.log("connection successful");
})

app.get('/', (req, res) => {
    res.send('backend is running ...');
})

app.use('/user', UserRoute)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

