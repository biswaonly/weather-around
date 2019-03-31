const express = require('express');
const userRoute = require('./routes/api/weather');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
})

app.use('/api/weather', userRoute);

  
const PORT = process.env.PORT || 5000;
  
app.listen(PORT,()=>console.log(`Server has Started on PORT ${PORT}`));
