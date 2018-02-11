const express=require('express');
const app=express();
const sql = require('mysql');
const bodyParser=require('body-parser');
const passport =require('passport');
const passportLocal=require('passport-local').Strategy;
const session=require('express-session');
const bcrypt=require('bcrypt');
let config={
  "host":'localhost',
  "user":'Dhruva',
  "password":'123456789',
  "database":'epiphany'
};
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser({extended:true}));
app.use(session({secret:"cat is here"}));     ///it can be anything
app.use(passport.initialize());
app.use(passport.session());
let port=process.env.PORT || 3000;
let connection=sql.createConnection(config);
app.use('/',express.static('psych'));
app.listen(port,function(){
  console.log(port);
  connection.connect();
  console.log("Connected to database too");
});
// app.post('/login/psych',passport.authenticate('local',{
//   successRedirect:'/psych/success',
//   failureRedirect:'/psych/failure'
// }));
app.post('/login/psych',passport.authenticate('local'),function(req,res){
  console.log(req.body);
  res.redirect('/index');
});
passport.use(new passportLocal(function(username,password,done){
    console.log("1");
    connection.query(`select* from psychiatrists where userid='${username}'`,function(err,result,fields){
    console.log("2");
    if(result.length){
        console.log("3");
        bcrypt.compare(password,result[0].pwd,function(err,res){
          console.log(res);
          if(res)
            return done(null,result[0].userid,{message:"logged in succesfully"});
          else
            return done(null,false,{message:"username/password is incorrect"});
        });
      }
    else
      return done(null,false,{message:"username/password is incorrect"});
  });
}));
passport.serializeUser(function(id,done){
  return done(null,id);
});
passport.deserializeUser(function(id,done){
  //WHAT IS RETUNRED FROM HERE IS SET AS REQ.USER IN THE /SUCCESS
  //if(id===userconfig.id)
    var isd={};
    connection.query(`select* from psychiatrists where userid='${id}'`,function(err,result,fields){
      if(result.length){
        isd.fname=result[0].fname;
        isd.lname=result[0].lname;
        isd.userid=result[0].userid;
        isd.regno=result[0].Doctorid;
        return done(null,isd);
      }
    });
});
app.get('/psych/success',function(req,res){
  console.log("hi");
  res.render("index.ejs",{user:req.user});
});
app.get('/psych/failure',function(req,res){
  console.log("failure");
  res.render("home.ejs")
});
app.post('/psych/send',function(req,res){
  console.log("hi");
  connection.beginTransaction(function(err){
    if(err) console.log(err);
    let query='insert into ?? values(?,?,?,?)';
    connection.query(sql.format(query,['mp',0,req.body.source,req.body.dest,req.body.content]),function(err,data){
      if(err){console.log(err);connection.rollback(function(){console.log(err);});}
      else connection.commit(function(err){
          if(err){console.log(err);connection.rollback(function(){console.log(err);});}
          else console.log("sent");
          res.sendStatus(200);
      });
    });
  });
});
app.post('/psych/fetch',function(req,res){
  console.log("hi");
  connection.beginTransaction(function(err){
    if(err) {res.sendStatus(404);console.log(err);}
    let query = 'select ??,?? from ?? where ??=? order by ??';
    connection.query(sql.format(query,['source','content','mu','destination',req.body.uid,'source']),function(err,data,fields){
      if(err){console.log(err);connection.rollback(function(){res.sendStatus(404);console.log(err);});}
      else connection.commit(function(err){
        if(err){console.log(err);connection.rollback(function(){res.sendStatus(404);console.log(err);})}
        console.log(data);
        connection.beginTransaction(function(err){
          if(err){res.sendStatus(404);console.log(err);}
          let query='delete from ?? where ??=?';
          connection.query(sql.format(query,['mu','destination',req.body.uid]),function(err,data2,field){
            if(err){console.log(err);connection.rollback(function(){res.sendStatus(404);console.log(err);});}
            else connection.commit(function(err){
              if(err){connection.rollback(function(){console.log(err)});}
              else {res.send(data);}
            });
          });
        });
      });
    });
  });
});
app.get('/user/logout',function(req,res){
  req.logout();
  res.render('home.ejs');
});
app.get('/home',function(req,res){
  res.render('home.ejs');
});
app.get('/index',function(req,res){
  console.log(req.user);
  res.render('index.ejs',{user:req.user});
})
