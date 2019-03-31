const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

const OPEN_KEY = 'a0b9fa9402bb6694375ce7abafb5e6ed';
const DARK_KEY = '405ca5cc1361c187923470fa003df791';
const DARK_URL = 'https://api.darksky.net/forecast/';
const OPEN_URL = 'http://api.openweathermap.org/data/2.5/weather';

router.post('/',async (req, res, next)=>{
	const CITY = req.body.city;
	const OPEN_QUR = `?q=${CITY}&appid=${OPEN_KEY}`;

	const openUrlLocation = (url1, url2) => {
		let newUrl = url1 + url2;
		return newUrl;
	};
	const openApiUrl = openUrlLocation(OPEN_URL, OPEN_QUR);
	try{
		let data = await fetch(openApiUrl);
		let jsonData = await data.json();
		let coordinate = jsonData.coord;

		const DARK_QRL = `${DARK_KEY}/${Object.values(coordinate).reverse()}`;

		const darkUrlLocation = (url1, url2) => {
			let newUrl = url1 + url2;
			return newUrl;
		};
		const darkApiUrl = darkUrlLocation(DARK_URL, DARK_QRL);
		try {
			let data = await fetch(darkApiUrl);
			let jsonData = await data.json();
			res.json(jsonData)

		} catch (error) {
			res.status(400).send('ajsia')
		}
	}catch(err){
		res.set(500);
		res.send(err);
	}

});

module.exports = router;