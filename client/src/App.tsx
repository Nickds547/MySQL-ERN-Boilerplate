import React from 'react';
import './App.css';

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			quotes: [{id: 0, words: "example", active: "true"}]
		};
  }
  
  async componentWillMount(){
		let r = await fetch("http://localhost:8000/api/quotes")
		let quotes: any = await r.json()
		console.log("HERE")
		this.setState({ quotes})
  }
	render() {
		return (
			<>
				<div>
					Hello World
					{this.state.quotes.map(quotes =>{
						return <li className="list-group-item">{quotes.words}</li>
					})}
				</div>
			</>
		);
	}
}

export interface IAppProps {}

export interface IAppState {
	quotes: Array<{id: number, active: String, words: String }>
}

export default App;
