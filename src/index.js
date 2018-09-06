import React from 'react';
import ReactDOM from 'react-dom';
import math from 'mathjs';
import update from 'immutability-helper';
import './index.css';



class Button extends React.Component{
	render(){
		return (
			<div 
				onClick = {this.props.onClick}
				data-size = {this.props.size}
				data-value = {this.props.value}
				className = "button"
			>
				{this.props.label}
			</div>
		)
	}
}

class Container extends React.Component{
	render(){
		return <div className="container">{this.props.children}</div>
	}
}

class Display extends React.Component {
	render(){
		const string = this.props.data.join('');
		return <div className="display">{string} </div>
	}
}

class App extends React.Component{

	constructor(){
		super();
		this.state = { operations: []}
	}

	calculateOperations = () => {
		let result = this.state.operations.join('');
		if (result) {
			result = math.eval(result);
			result = math.format(result, {precision: 14});
			result = String(result);
			this.setState({
				operations: [result],
			})
		}
	}

	handleClick = e => {
		const value = e.target.getAttribute('data-value');
		switch(value){
			case 'clear':
				this.setState({
					operations: [],
				})
				break;
			case 'equal':
				this.calculateOperations();
				break;
			case 'del':
				const delOperations = update(this.state.operations,{
					$splice:[[-1,1]],
				})
				this.setState({
					operations: delOperations,
				})
				break;
			default: 
				const newOperations = update(this.state.operations,{
					$push: [value],
				})
				this.setState({
					operations: newOperations,
				})
				break;
		}
	}

	render(){
		return (
			<div className="app">
				<Display data={this.state.operations}/>
				<Container>
					<Button onClick={this.handleClick}  label="+" value="+"/>
					<Button onClick={this.handleClick} label="7" value="7"/>
					<Button onClick={this.handleClick} label="4" value="4"/>
					<Button onClick={this.handleClick} label="1" value="1"/>
					<Button onClick={this.handleClick} label="0" value="0"/>

					<Button onClick={this.handleClick}  label="-" value="-"/>
					<Button onClick={this.handleClick} label="8" value="8"/>
					<Button onClick={this.handleClick} label="5" value="5"/>
					<Button onClick={this.handleClick} label="2" value="2"/>
					<Button onClick={this.handleClick} label="." value="."/>

					<Button onClick={this.handleClick} label="x" value="*"/>
					<Button onClick={this.handleClick} label="9" value="9"/>
					<Button onClick={this.handleClick} label="6" value="6"/>
					<Button onClick={this.handleClick} label="3" value="3"/>
					<Button onClick={this.handleClick} label="C" value="clear"/>
					
					<Button onClick={this.handleClick} label="/" value="/"/>
					<Button onClick={this.handleClick} label="(" value="("/>
					<Button onClick={this.handleClick} label=")" value=")"/>
					<Button onClick={this.handleClick} label="del" value="del"/>
					<Button onClick={this.handleClick} label="=" value="equal"/>
					
				</Container>
			</div>
		);
	}
}

ReactDOM.render(
	<App />,document.getElementById('root')
);