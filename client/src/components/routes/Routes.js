import { Switch, Route } from 'react-router-dom'
import IndexPage from '../pages/Index/Index'

const Routes = () => {
	return (
		<>
			<Switch>
				<Route exact path='/' render={() => <IndexPage />} />
			</Switch>
		</>
	)
}

export default Routes
