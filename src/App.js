import React, { Component } from 'react';
import './App.css';

const brushcoco = './brushcoco.jpg';
const normalcoco = './normalcoco.jpg';

let targetcoco = normalcoco;


export class App extends Component {
	constructor(props) {
		super(props)
		this.state ={
			selectedCoco: normalcoco
		}
	}
	handleClick = () => {
		if (targetcoco === brushcoco) {
			this.setState({
				selectedCoco: normalcoco
			})
		}
		else {
			this.setState({
				selectedCoco: brushcoco
			})
		} 
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={this.selectedCoco} className="coco" alt="coco" width={300} height={300} onClick={this.handleClick} />
				</header>
				<div>

				</div>
			</div>
		);
	}
}

export default App;
