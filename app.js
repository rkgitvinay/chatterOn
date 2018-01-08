var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var path = require('path');
var auth = require('./auth/auth');
server.listen(3000);

app.get('/', function (req, res){
  res.render('index');
});


function getDate(dd){
    var today = new Date(dd);
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    var hh = today.getHours();
    var min = today.getMinutes();
    var ss = today.getSeconds();
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
    if(hh<10){
      hh = '0'+hh;
    }
    if(min<10){
      min='0'+min;
    }
    if(ss<10){
      ss='0'+ss;
    }
    today = yyyy+'-'+mm+'-'+dd+' '+hh+':'+min+':'+ss;
    return today;
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

io.sockets.on('connection', function (socket){
  console.log('stream start');

  var watchList = [];
  watchList.push(socket.handshake.query.key);

  var stream = auth.stream('statuses/filter', { track: watchList })
  
  stream.on('tweet', function (tweet) {
    var newTweet = {
       tweet_id:tweet.id,
       text:tweet.text,
       created_at:getDate(tweet.created_at),
       user_id:tweet.user.id,
       user_name:tweet.user.name,
       screen_name:tweet.user.screen_name,
       profile_url:tweet.user.profile_image_url
    }
    io.sockets.emit('stream',newTweet);
  });
}); 




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
