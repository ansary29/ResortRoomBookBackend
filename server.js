const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dbConfig = require('./db')
const roomsRoute = require('./routes/roomsRoute');
const usersRoute = require('./routes/usersRoute');
const BookingsRoute = require('./routes/bookingsRoute');
const path = require('path')


//this have changed
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());
app.use('/api/rooms', roomsRoute);
app.use('/api/users', usersRoute);
app.use('/api/bookings', BookingsRoute);
app.use(express.json());

    // if(process.env.NODE_ENV === 'production'){
    //     app.use('/', express.static('client/build'))
    //     app.get('*' , (req, res) => {
    //         res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
    //     })
    // }

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Node Server Running in ${port}`));