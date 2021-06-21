import React from 'react'
import styled from 'styled-components'
import profilePhoto from './assets/profile.jpeg'

const WhiteSection = styled.section``

function AboutMe() {
	return (
		<WhiteSection id='about-me'>
			<div className='rectangle'>
				<img src={profilePhoto} alt='Teodoro López, fullstack developer'></img>
			</div>
			<header>
				<h2>About me</h2>
			</header>
			<article>
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
		</WhiteSection>
	)
}

export default AboutMe
