import { Switch, Route, Redirect } from 'react-router-dom'
import IndexPage from '../pages/Index/Index'

const Routes = ({ storeUser, loggedUser, isAdmin, handleAlert }) => {
	return (
		<>
			<Switch>
				<Route path='/' exact render={() => <IndexPage />} />
				{/* <Route exact path="/other" render={() => <MyMap />} /> */}
			</Switch>
		</>
	)
}

export default Routes
