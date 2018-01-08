Project Folder and file structure

auth-> auth.js
    twitter credentials //put your own credentials
    var client = new Twitter({
        consumer_key: 'dfkladfasdkfskdas',
        consumer_secret: 'asfjasdsf',
        access_token_key: 'jslfkasfkasd',
        access_token_secret: 'jslfaklfasddss'
    });
  
config->database.js
    //database credentials
    
controllers->admin_model.js
    //controller of all api and cron 

models->model.js
    //model for the database queries against admin controller
    
public->javascripts->app.js
    //angular script
   // i have used ajax call to check updates in database but we can build it by using socket.js for more realtime functionaly 
   
