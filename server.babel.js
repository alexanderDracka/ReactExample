import express from 'express';

const app = express();

app.use('/', express.static('public'));

app.get('/hello', function(req,res){
    res.send('Hello Alexander.')
})

app.listen(process.env.PORT || 3000, console.log('Listening'));