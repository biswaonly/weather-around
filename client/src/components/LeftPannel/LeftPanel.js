import React, { Component } from 'react'
import "./leftPanel.css";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class LeftPanel extends Component {
	changeRoute=(val)=>{
		switch (val){
			case 0 :
				this.props.history.push('/');
				break;
			case 1 :
				this.props.history.push('/tomorrow');
				break;
			case 2 :
				this.props.history.push('/week');
				break;
			case 3 :
				this.props.history.push('/settings');
				break;
			default :
				break;
		}
	}
	handlePanels=(i)=>{
		let b = this.props.leftPanel.flatMap(e=> Object.keys(e));
		let z = b.map((e, ii)=>{
			if(i === ii){
				return{[e] : true}
			}else
				return {[e] : false}
		})
		this.props.addToState({leftPanel : [...z]})
		console.log(i);
		
		this.changeRoute(i);
	}
	render(){
		return(
			<div className="leftPanel">
				{this.props.leftPanel.map((item,index)=>{
					return(
						<div
							key={index}
							className={(Object.values(item)[0])?"active":null}
							onClick={()=>this.handlePanels(index)}
						>
							{Object.keys(item)[0]}
						</div>
					)
				})}
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LeftPanel));