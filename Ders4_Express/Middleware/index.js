const express = require('express');
const app = express();
const PORT = 3000;  

const auth=require('./middle/auth');
const logger=require('./middle/logger');
const errorHandler=require('./middle/errorHandler');

// app.use(auth);

// app.use((req,res,next)=>{
//     console.log('Middleware');
//     //! res.send('middleware');
//     next();
// });

// app.use((req,res,next)=>{
//     logger(`${req.method}\t${req.url}`, 'log.txt');
//     next();
// });

app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// app.get('/',auth, (req, res) => {
//     res.send('root page');
// });

// app.get('/users',
// (req, res) => {
//     logger(`${req.method}\t${req.url}`, 'log.txt');
// },
// (req, res) => {
//     res.send('users page');
// });

//* CORS
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send('CORS Samples');
});

app.get('/test/:id', (req, res,next) => {
    if (req.params.id == 1) {
        next({
            errorMessage:'Hata'
        });
    }
});

app.use(errorHandler);

app.listen(PORT, () => {
    console.log('server is running on port ' + PORT);
});