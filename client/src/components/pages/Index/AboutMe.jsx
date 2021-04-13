import React from 'react'
import styled from 'styled-components'
import profilePhoto from './assets/profile.jpeg'
import { Container, Row, Col } from 'react-bootstrap'

const WhiteSection = styled.section`
	padding: 24px;
	margin-top: 100vh;
	background-color: rgb(250, 250, 250);

	/* padding-bottom: 1200px; */
	h2 {
		font-size: 3em;
	}

	.container {
		margin: 0 auto;
	}
	img {
		width: 60%;
		filter: grayscale(0.1);
		border-radius: 50%;
	}
`

function AboutMe() {
	return (
		<WhiteSection>
			<Container>
				<Row className='justify-content-between align-items-center'>
					<Col className='col-md-6 col-12'>
						<img src={profilePhoto} alt='Teodoro López, fullstack developer'></img>
					</Col>
					<Col className='col-md-6 col-12'>
						<h2>About me</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugiat est voluptates. At beatae harum culpa ipsum, similique,
							velit incidunt magnam quasi sed, nobis reprehenderit tempore distinctio accusantium nostrum quisquam!
						</p>
					</Col>
				</Row>
			</Container>
		</WhiteSection>
	)
}

export default AboutMe
