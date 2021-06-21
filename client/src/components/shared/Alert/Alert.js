import Snackbar from '@material-ui/core/Snackbar'
import logo from './../../layout/Navigation/logoblack.png'

const Alert = ({ handleAlert, show, title, text }) => {
	const message = (
		<>
			<header>
				<img src={logo} className='rounded mr-2' alt='Logotipo' style={{ width: 20, height: 20 }} />
				<strong className='mr-auto'>{title}</strong>
			</header>
			<div>{text}</div>
		</>
	)

	return (
		<Snackbar
			autoHideDuration={6000}
			open={show}
			onClose={() => handleAlert(false)}
			message={message}
			style={{ zIndex: 9999, position: 'fixed', bottom: 38, right: 17, width: 400 }}
		></Snackbar>
	)
}

export default Alert
