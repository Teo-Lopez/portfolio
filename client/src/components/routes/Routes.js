import { Switch, Route } from 'react-router-dom'
import IndexPage from '../pages/Index/Index'

const Routes = ({ storeUser, loggedUser, isAdmin, handleAlert }) => {
	return (
		<>
			<Switch>
				<Route path='/' render={() => <IndexPage />} />
			</Switch>
		</>
	)
}

export default Routes
