import { TechCard } from '../../shared/Card/Cards'
import jsLogo from './assets/javascript-logo.png'
import mongoLogo from './assets/mongo-logo.png'
import nodeLogo from './assets/node-logo.png'
import reactLogo from './assets/react-logo.png'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'

const Header = styled.header`
	background-color: black;
	text-align: center;
	color: rgba(250, 250, 250, 0.9);
	h1 {
		padding-top: 16px;
		font-size: 2em;
		letter-spacing: 2.5px;
		color: white;
	}
	.fixer {
		height: 100vh;
		width: 100%;
	}
	.center {
		width: 80%;
		margin: 0 auto;
	}

	img {
		max-height: 130px;
		margin-top: 16px;
	}

	@media only screen and (min-width: 570px) {
		height: calc(100vh - 65px);

		.fixer {
			position: fixed;

			height: calc(100vh - 65px);
		}

		.center {
			width: 80%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		img {
			max-height: 200px;
		}

		h1 {
			font-size: 3em;
			margin-bottom: 1em;
		}

		h2,
		p {
			font-size: 2em;
		}

		.flex-center {
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	@media only screen and (min-width: 1200px) {
		img {
			max-height: 240px;
		}

		h1 {
			font-size: 5em;
			margin-bottom: 1em;
		}

		h2,
		p {
			font-size: 3em;
		}
	}
`
const Technologies = styled(Row)``

const Hero = () => {
	return (
		<Header id='welcome'>
			<div className='fixer'>
				<div className='center'>
					<h1>Teodoro López</h1>
					<Technologies className='	justify-content-around align-items-center'>
						<Col xs={12} sm={6} lg={3}>
							<TechCard imgUrl={reactLogo} name={'React'} />
						</Col>
						<Col xs={12} sm={6} lg={3}>
							<TechCard imgUrl={mongoLogo} name={'Mongo'} />
						</Col>
						<Col xs={12} sm={6} lg={3}>
							<TechCard imgUrl={nodeLogo} name={'Node.js'} />
						</Col>
						<Col xs={12} sm={6} lg={3}>
							<TechCard imgUrl={jsLogo} name={'Javascript'} />
						</Col>
					</Technologies>
				</div>
			</div>
		</Header>
	)
}

export default Hero
