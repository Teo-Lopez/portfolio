import { useState, useEffect } from 'react'
import styled from 'styled-components'
import profilePhoto from './assets/profile.jpeg'
import { Paper, Divider } from '@material-ui/core'

const WhiteSection = styled.section`
	font-family: 'Roboto Mono';
	font-size: 1rem;
	padding: 1rem;
	
	article {
		margin-top: 16px;
		padding: 0.5rem 1rem;
	}

	img {
		width: 100%;
		display: block;
		margin: 0 auto;
	}

	 @media (min-width: 600px) {
		article header {
			margin-bottom: 16px; 
			.photo-wrapper {
				width: 40%;
				margin: 0 auto;
			}
			h2 {
				width: 100%;
				text-align: center;
				margin: 0;
			}
		}
  }
	 
	 @media (min-width: 1200px) {
		article  {
			header {
				
				.photo-wrapper {
					width: 70%
				}
			}
			.description {
				width: 65%;
			}
			font-size: 1.3rem;
			margin-bottom: 16px;
			display: flex;
			align-items: center;
			justify-content: space-around;
			h2 {
				text-align: left;
				margin: 6px 0;
				letter-spacing: 2px;
				font-weight: 300;
			}
		}
  }
`

function AboutMe() {
	const [mobileView, setMobileView] = useState(false)



	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 1200
				? setMobileView(true)
				: setMobileView(false)
		}

		setResponsiveness()

		window.addEventListener('resize', () => setResponsiveness())

		return () => {
			window.removeEventListener('resize', () => setResponsiveness())
		}
	}, [])

	return mobileView ? <AboutMeMobile /> : <AboutMeDesktop />
}

function AboutMeMobile() {
	return (
		<WhiteSection id='about-me'>
			<Paper>
				<article>
					<header>
						<div className='photo-wrapper'>
							<img src={profilePhoto} alt='Teodoro López, fullstack developer'></img>
						</div>
						<h2>About me</h2>
					</header>
					<Divider />
					<p>
						Desarrollador junior fullstack con Stack MERN (MongoDB, Express, React, Node)
						anteriormente psicologo y recruiter IT.
					</p>
					<p>
						Realicé 2 proyectos web con el mismo y una skill para Alexa Echo también en javascript.
					</p>
					<p>
						Tras el bootcamp me incorporé al equipo educativo como Teacher Assistant ayudando a
						docenas de alumnos a sacar adelante sus propios proyectos, ayudé en un proyecto
						internacional para la mejora de la documentación del curso además de en otros proyectos
						internos.
					</p>
				</article>
			</Paper>
		</WhiteSection>
	)
}


function AboutMeDesktop() {
	return (
		<WhiteSection id='about-me'>
			<Paper>
				<article>
					<header>
						<div className='photo-wrapper'>
							<img src={profilePhoto} alt='Teodoro López, fullstack developer'></img>
						</div>
					</header>
					<div className="description">
						<h2>About me</h2>
						<Divider />
						<p>
							Desarrollador junior fullstack con Stack MERN (MongoDB, Express, React, Node)
							anteriormente psicologo y recruiter IT.
						</p>
						<p>
							Realicé 2 proyectos web con el mismo y una skill para Alexa Echo también en javascript.
						</p>
						<p>
							Tras el bootcamp me incorporé al equipo educativo como Teacher Assistant ayudando a
							docenas de alumnos a sacar adelante sus propios proyectos, ayudé en un proyecto
							internacional para la mejora de la documentación del curso además de en otros proyectos
							internos.
						</p>
					</div>
				</article>
			</Paper>
		</WhiteSection>
	)
}

export default AboutMe
