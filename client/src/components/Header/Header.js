import React, { Component } from 'react';
import './header.css';
import { connect } from 'react-redux';
import { justFetch } from '../../requests/OpenApi';

class Header extends Component {
	cityName=(e)=>{
		this.props.addToState({cityName : e.target.value})
	}
	startFetch = async(e)=>{
		e.preventDefault();
		try {
			const obj = {city : this.props.cityName}
			// this.props.fetchOpenAsync(obj);
			const fetchData = await fetch('http://localhost:5000/api/weather',{
				method : "POST",
				headers : {
					'Content-type': 'application/json'
				},
				body : JSON.stringify(obj)
			});
			if(fetchData.status > 300){
				return console.error('no Nothing')
			}else{
				const weatherData = await fetchData.json();
				console.log(weatherData);
				
			}

		} catch (error) {
			console.error(error)
			
		}

		// const result = await fetch(`${WEATHER_URL}?q=${this.props.cityName}&appid=${OPEN_KEY}`);
		// console.log(result);
		
		// let c = await result.json();
		// console.log("CCC",c.main);
		
	}
	render(){
		console.log(this.props.cityName);
		
		return(
			<div className="header">
				<div className="header_logo">
					<h1>Weather Forecast</h1>
				</div>
				<div className="header_input">
					<input type="text" placeholder="City Name..." onChange={(e)=>this.cityName(e)}></input>
					<div onClick={(e)=>this.startFetch(e)}>city</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return{
			...state
	}
}

function mapDispatchToProps(dispatch) {
	return{
		addToState: (value)=>{
			const action = { type: 'ADD_TO_STATE', value};
			dispatch(action);
		},
		fetchOpenAsync: (value)=>{
			justFetch(value, dispatch)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);