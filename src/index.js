import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Button extends React.Component{
	render(){
		return (
			<div 
				onClick = {this.props.onClick}
				data-size = {this.props.size}
				data-value = {this.props.value}
				className = "Button"
			>
				{this.props.label}
			</div>
		)
	}
}

class Container extends React.Component{
	render(){
		return <div className="Container">{this.props.children}</div>
	}
}

class App extends React.Component{
	render(){
		return (
			<div className="App">
				<Container>
					<Button label="C" value="clear"/>
					<Button label="7" value="7"/>
					<Button label="4" value="4"/>
					<Button label="1" value="1"/>
					<Button label="0" value="0"/>

					<Button label="/" value="/"/>
					<Button label="8" value="8"/>
					<Button label="5" value="5"/>
					<Button label="2" value="2"/>
					<Button label="." value="."/>

					<Button label="x" value="*"/>
					<Button label="9" value="9"/>
					<Button label="6" value="6"/>
					<Button label="3" value="3"/>
					<Button label="" value="null"/>

					<Button label="-" value="-"/>
					<Button label="+" value="+"/>
					<Button label="=" value="equal"/>
				</Container>
			</div>
		);
	}
}

ReactDOM.render(
	<App />,document.getElementById('root')
);