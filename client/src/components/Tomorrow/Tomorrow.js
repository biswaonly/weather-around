import React, { Component } from 'react'
import "./tomorrow.css";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Tomorrow extends Component {
	render(){
		return(
			<div className="tomorrow">
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
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Tomorrow));