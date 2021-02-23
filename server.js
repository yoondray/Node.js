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

var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : '127.0.0.1',
  user            : 'yoondray',
  password        : '1234',
  database        : 'study_db'
});


app.get('/db', function(req, res){
    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        connection.query('SELECT * FROM chatbot_train_data', function (error, results, fields) {
          res.send(JSON.stringify(results));
          console.log('results', results)
            // When done with the connection, release it.
          connection.release();
       
          // Handle error after the release.
          if (error) throw error;
       
          // Don't use the connection here, it has been returned to the pool.
        });
      });
})


