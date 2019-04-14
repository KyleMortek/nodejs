const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
let app = express();
const port = process.env.PORT || 3000;
hbs.registerPartials(__dirname + '/views/partials')

app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>{
  let now = new Date().toString();
  let log = `${now}: ${req.method} ${req.url}`;
  fs.appendFile('server.log',log+'/',(err)=>{
    if(err){
      console.log('unable to process');
    }
  });
  next();
});

app.use((req,res,next)=>{
  res.render('maintenance.hbs');
});

hbs.registerHelper('getCurrentYear', ()=>{
  return new Date().getFullYear();
});
hbs.registerHelper('screamIt',(text)=> {
  return text.toUpperCase();
});
app.get('/', (req, res)=>{// this is the homepage. no sub directory 
  res.render('home.hbs',{
    pageTitle:'Home Page',
    welcomeMessage:'Welcome to my site',
    currentYear: new Date().getFullYear()
  });
});
app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

app.listen(port,()=>{
  console.log(`"server is up on port ${port}`)
});


