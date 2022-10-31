import React, { Component } from "react";


//PASS DATA BETWEEN COMPONENTS
//STATE can be changed. Each component can have it's own state. Only local to the component (like clicking a button and changing the state)
//PROPS cannot be modified, are read only and immutable

class Counter extends Component {

	componentDidUpdate(prevProps, prevState){
		//called after component is updated (duh)
		//if there is an update you can make an ajax request to get new data from the server
		console.log('prevProps ->', prevProps);
		console.log('prevState ->', prevState);
		if(prevProps.counter.value !== this.props.counter.value){
			//ajac call to get new data from server
		}
	}

	componentWillUnmount(){
		//called just before component is removed from DOM
		console.log('Counter-Unmount');
		//you can also use this for clean up. Timers, listeners etc can be removed here
	}

	styles = {
		fontSize: 50, //automatically converts to 100px
		fontWeight: "bold",
		//apply ^by passing {this.styles} to the style property, or set them directly like below in double curly braces
	};

	render() {
		console.log('Counter-Rendered');

		return (

			<div>

				<span style={{ fontSize: 30, fontWeight: "bold" }} className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button onClick={()=> this.props.onIncrement(this.props.counter)} className="btn btn-success btn-sm m-2">increment meee</button>
				<button onClick={this.handleReset} className="btn btn-info btn-sm m-2">reset</button>
				<button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">delete</button>

			</div>

		);
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? "zero" : value;
	}
}

export default Counter;
