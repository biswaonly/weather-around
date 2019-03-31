import React, { Component } from 'react';
import './today.css';
import { connect } from 'react-redux';

class Today extends Component {
	render(){
		// console.log(this.props.temperature);
		return(
			<div className="today">
				<div>
					<p>{this.props.temperature}</p>
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
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Today);