import { TechCard } from '../../shared/Card/Cards'
import jsLogo from './assets/javascript-logo.png'
import mongoLogo from './assets/mongo-logo.png'
import nodeLogo from './assets/node-logo.png'
import reactLogo from './assets/react-logo.png'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'

const Header = styled.header`
	text-align: center;
	padding: 16px;
	h1 {
		font-weight: 100;
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
	@media (min-width: 600px) {
		h1 {
			font-size: 3rem;
		}
  }
	@media (min-width: 890px) {
		padding-top: 0;
    h1 {
			font-size: 3.8rem;
		}
  }
	@media (min-width: 1200px) {
		padding-top: 16px;
    h1 {
			font-size: 4.2rem;
		}
  }
`
const Hero = () => {
	return (
		<Header id='welcome'>
			<h1>Teodoro López</h1>
			<Grid
				className='technologies'
				container
				direction='row'
				justify='space-evenly'
				alignItems='center'
			>
				<Grid className='col' item xs={6} md={3}>
					<TechCard imgUrl={reactLogo} name={'React'} />
				</Grid>
				<Grid className='col' item xs={6} md={3}>
					<TechCard imgUrl={mongoLogo} name={'Mongo'} />
				</Grid>
				<Grid className='col' item xs={6} md={3}>
					<TechCard imgUrl={nodeLogo} name={'Node.js'} />
				</Grid>
				<Grid className='col' item xs={6} md={3}>
					<TechCard imgUrl={jsLogo} name={'Javascript'} />
				</Grid>
			</Grid>
		</Header>
	)
}

export default Hero
