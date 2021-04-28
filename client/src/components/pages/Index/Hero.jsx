import { useEffect } from 'react'
import { TechCard } from '../../shared/Card/Cards'
import jsLogo from './assets/javascript-logo.png'
import mongoLogo from './assets/mongo-logo.png'
import nodeLogo from './assets/node-logo.png'
import reactLogo from './assets/react-logo.png'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'

const Header = styled.header`
	height: calc(100vh - 65px);
	background-color: black;
	position: fixed;
	width: 100%;
	z-index: -1000;
	text-align: center;
	color: rgba(250, 250, 250, 0.9);

	h1 {
		font-size: 5em;
		margin-bottom: 1em;
	}

	h2,
	p {
		font-size: 3em;
	}

	.center {
		width: 80%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.top {
		height: 45%;
	}

	.flex-center {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`
const Technologies = styled(Row)``

const Hero = () => {
	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
		}, 3000)
	}, [])

	return (
		<Header>
			<div className='center'>
				<h1>Teodoro López</h1>
				<Technologies className='justify-content-around align-items-center'>
					<Col className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
						<TechCard imgUrl={reactLogo} name={'React'} />
					</Col>

					<Col className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
						<TechCard imgUrl={mongoLogo} name={'Mongo'} />
					</Col>
					<Col className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
						<TechCard imgUrl={nodeLogo} name={'Node.js'} />
					</Col>
					<Col className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
						<TechCard imgUrl={jsLogo} name={'Javascript'} />
					</Col>
				</Technologies>
			</div>
		</Header>
	)
}

export default Hero
