import { Component } from 'react'
import './App.css'
import Routes from './routes/Routes'
import Navigation from './layout/Navigation/Navigation'
import Alert from './../components/shared/Alert/Alert'

class App extends Component {
	constructor() {
		super()
		this.state = {
			alert: {
				show: false,
				title: '',
				text: ''
			}
		}
	}

	handleAlert = (show, title, text) => this.setState({ alert: { show, title, text } })

	render() {
		return (
			<>
				<Navigation />
				<main>
					<Routes handleAlert={this.handleAlert} />
				</main>
			</>
		)
	}
}

export default App
