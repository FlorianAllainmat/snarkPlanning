const bodyParser = require('body-parser');
const express = require('express');
const connection = require('./db');
const cors = require('cors')

connection.connect((err) => {
    if(err){
        throw err; 
    }
})

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/project', require('./router/project'));
app.use('/collaboraters', require('./router/collaboraters'));
app.use('/managers', require('./router/managers'));
app.use('/tickets_progress', require('./router/ticketsProgress'));
app.use('/tickets_finish', require('./router/ticketsFinish'));

app.listen('3000', () => {
    console.log('server started on port 3000')
})





