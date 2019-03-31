/**
 * WeatherController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const https = require("https");
const OPEN_KEY = 'a0b9fa9402bb6694375ce7abafb5e6ed';
const DARK_KEY = '405ca5cc1361c187923470fa003df791';
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';
const DARK_URL = 'https://api.darksky.net/forecast/';
module.exports = {
    
  /**
   * `WeatherController.getCoordinate()`
   */
  // getCoordinate: async function (req, res) {
  //   const city = req.params.city;
  //   getData(`${WEATHER_URL}?q=${city}&appid=${OPEN_KEY}`, (err,data)=>{
  //     if(err) return res.serverError(e);
  //     return res.json(data);
  //   })
  // },

  /**
   * `WeatherController.find()`
   */
  find: async function (req, res) {
    const city = req.query.city;
    getData(`${WEATHER_URL}?q=${city}&appid=${OPEN_KEY}`, (err,data)=>{
      if(err) return res.serverError(e);
      
      getData(`${DARK_URL}${DARK_KEY}/${data.coord.lat},${data.coord.lon}`, (err,data)=>{
        if(err) return res.serverError(e);
        return res.json(data);
      })      
    })
  }

};

function getData(url, cb){
    https.get(url, (resp)=>{
      let data = ''
      resp.on('data',(chunk)=>{
        data += chunk;
      });

      resp.on('end',()=>{
        cb(null, JSON.parse(data));
      })
    }).on("error",err=>{
      cb(err);
    })
};