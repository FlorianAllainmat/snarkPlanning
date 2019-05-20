// Import 
const bodyParser = require('body-parser');
const express = require('express');
const connection = require('./db');
const cors = require('cors');
const config = require('config');

// Connection Server
connection.connect((err) => {
    if(err){
        throw err; 
    }
})

const app = express();

// Cors
app.use(cors())

// BodyParser Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Routes Configuration
app.use('/project', require('./routes/project'));
app.use('/collaboraters', require('./routes/collaboraters'));
app.use('/managers', require('./routes/managers'));
app.use('/tickets_progress', require('./routes/ticketsProgress'));
app.use('/tickets_finish', require('./routes/ticketsFinish'));


//Launch Server
app.listen(config.serverPort, () => {
    console.log('server started on port ' + config.serverPort)
})





