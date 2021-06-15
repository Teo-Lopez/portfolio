import React from 'react'
import styled from 'styled-components'
import profilePhoto from './assets/profile.jpeg'
import { Container, Row, Col } from 'react-bootstrap'

const WhiteSection = styled.section`
	padding: 24px;
	background-color: rgb(250, 250, 250);
	position: relative;
	p {
		font-size: 0.8em;
		font-weight: 500;
		line-height: 2em;
	}

	h2 {
		text-align: center;
		font-size: 2em;
	}

	header {
		padding-top: 16px;
	}

	article {
		padding-top: 12px;
	}
	.rectangle {
		margin: 0 auto;
		width: 80%;
		height: 100%;
	}

	img {
		margin: 0 auto;
		width: 100%;
		filter: grayscale(0.1);
		border-radius: 50%;
	}

	@media only screen and (min-width: 570px) {
		p {
			font-size: 1em;
		}
	}
	@media only screen and (min-width: 1200px) {
		p {
			font-weight: 100;
			font-size: 1.3em;
		}
	}
`

function AboutMe() {
	return (
		<WhiteSection id='about-me'>
			<Container fluid>
				<Row className='justify-content-between align-items-center'>
					<Col className='col-md-4 col-12'>
						<div className='rectangle'>
							<img src={profilePhoto} alt='Teodoro López, fullstack developer'></img>
						</div>
					</Col>
					<Col className='col-md-8 col-12'>
						<header>
							<h2>About me</h2>
						</header>
						<article>
							<p>
								Desarrollador junior fullstack con Stack MERN (MongoDB, Express, React, Node)
								anteriormente psicologo y recruiter IT.
							</p>
							<p>
								Realicé 2 proyectos web con el mismo y una skill para Alexa Echo también en
								javascript.
							</p>
							<p>
								Tras el bootcamp me incorporé al equipo educativo como Teacher Assistant ayudando a
								docenas de alumnos a sacar adelante sus propios proyectos, ayudé en un proyecto
								internacional para la mejora de la documentación del curso además de en otros
								proyectos internos.
							</p>
						</article>
					</Col>
				</Row>
			</Container>
		</WhiteSection>
	)
}

export default AboutMe
