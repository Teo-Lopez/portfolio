import React from 'react'
import { TechCard } from '../../shared/Card/Cards'
import jsLogo from './assets/javascript-logo.png'
import mongoLogo from './assets/mongo-logo.png'
import nodeLogo from './assets/node-logo.png'
import reactLogo from './assets/react-logo.png'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

const Header = styled.header`
	height: calc(100vh - 65px);
	background-color: black;
	position: fixed;
	width: 100%;
	z-index: -1000;
	h1,
	h2,
	p,
	.brackets {
		color: rgba(250, 250, 250, 0.9);
	}
	.top {
		height: 45%;
	}

	.flex-center {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	h1,
	span {
		font-size: 5em;
	}

	.brackets {
		margin-bottom: 0.2em;
		font-size: 10em;
		font-family: 'Ubuntu', sans-serif;
		font-weight: 100;
	}
`
const Technologies = styled(Row)``

const Hero = () => {
	return (
		<Header>
			<Container style={{ height: '100%' }}>
				<div className='flex-center top'>
					<span className='brackets'>{'{'}</span>
					<h1>Teodoro López</h1>
					<span className='brackets'>{'}'}</span>
				</div>
				<Technologies className='justify-content-around align-items-center bottom'>
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
			</Container>
		</Header>
	)
}

export default Hero
