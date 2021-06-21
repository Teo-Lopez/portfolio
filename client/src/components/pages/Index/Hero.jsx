import { TechCard } from '../../shared/Card/Cards'
import jsLogo from './assets/javascript-logo.png'
import mongoLogo from './assets/mongo-logo.png'
import nodeLogo from './assets/node-logo.png'
import reactLogo from './assets/react-logo.png'
import styled from 'styled-components'
import { Grid, Divider } from '@material-ui/core'

const Header = styled.header`
	text-align: center;
	padding: 16px;
	h1 {
		font-weight: 200;
		letter-spacing: 3px;
	}

	.technologies {
		padding: 16px 0;
	}

	.col {
		margin-top: 16px;
		h2 {
			font-size: 1.5rem;
			font-weight: 200;
			letter-spacing: 1px;
			margin-top: 6px;
		}
	}
`
const Hero = () => {
	return (
		<>
			<Header id='welcome'>
				<h1>Teodoro López</h1>
				<Grid
					className='technologies'
					container
					direction='row'
					justify='space-evenly'
					alignItems='center'
				>
					<Grid className='col' item xs={6} lg={3}>
						<TechCard imgUrl={reactLogo} name={'React'} />
					</Grid>
					<Grid className='col' item xs={6} lg={3}>
						<TechCard imgUrl={mongoLogo} name={'Mongo'} />
					</Grid>
					<Grid className='col' item xs={6} lg={3}>
						<TechCard imgUrl={nodeLogo} name={'Node.js'} />
					</Grid>
					<Grid className='col' item xs={6} lg={3}>
						<TechCard imgUrl={jsLogo} name={'Javascript'} />
					</Grid>
				</Grid>
			</Header>
			<Divider light />
		</>
	)
}

export default Hero
