import { Component } from 'react'
import './App.css'
import Routes from './routes/Routes'
import Navigation from './layout/Navigation/Navigation'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

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
			<ThemeProvider theme={theme}>
				<Navigation />
				<main>
					<Routes handleAlert={this.handleAlert} />
				</main>
			</ThemeProvider>
		)
	}
}

export default App
