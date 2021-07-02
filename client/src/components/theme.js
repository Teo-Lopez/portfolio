import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
	palette: {
		primary: {
			light: 'rgb(250,250,250)',
			main: '#ccc5b8',
			dark: 'rgb(0,0,0)',
			contrastText: '#e9401e'
		}
	},
	typography: {
		// Use the system font instead of the default Roboto font.
		fontFamily: [
			'Roboto Mono',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"'
		].join(',')
	},
	//simplification 1.6rem 16px
	fontSize: 10
})

export default theme
