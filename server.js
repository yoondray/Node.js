const express = require('express');
const app = express();

const server = app.listen(3000, () => {
    console.log('Start Server : localhost:3000');

});

app.set('views', __dirname + '/views');
app.set('view engine',  'ejs');
app.engine('html', require('ejs').renderFile);

//routing
app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/about', function (req, res) {
    res.send('About Page')
  })

//connect with html
app.get('/home', function(req, res){
    res.render('index.html')
})

app.get('/home/about', function(req, res){
    res.render('about.html')
})


