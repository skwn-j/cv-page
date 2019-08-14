import React, { Component } from 'react';
import './App.css';

const brushcoco = './brushcoco.jpg';
const normalcoco = './normalcoco.jpg';

export class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedCoco: normalcoco
		}
	}

	handleClick = () => {
		console.log('click')
		if (this.state.selectedCoco === brushcoco) {
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
				<img src={this.state.selectedCoco} className="coco" alt="coco" width={300} height={300} onClick={this.handleClick} />

				<h1> 정코코 </h1>
				<h2> Coco Jung </h2>

			</div>
		);
	}
}

export default App;
