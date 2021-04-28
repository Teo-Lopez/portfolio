import styled from 'styled-components'
import dice from './assets/dice.jpg'
import echodot from './assets/alexa.jpg'
import lab from './assets/lab.jpg'
import TrackVisibility from 'react-on-screen'
import ProjectCard from './ProjectCard'

const ProjectsWrapper = styled.section`
	text-align: center;
	width: 100%;
	h2 {
		padding: 30px;
	}
`

const StyledGrid = styled.div`
	display: grid;
	background-color: rgb(250, 250, 250);
	grid-template-columns: repeat(4, 1fr);
	grid-auto-rows: minmax(300px, auto);
	grid-gap: 1px;

	.left-col {
		grid-column: 1 / 3;
		grid-row: 1 / 5;
	}

	.first-row {
		grid-column: 3 / 5;
		grid-row: 1 / 3;
		display: flex;
		align-items: center;
	}

	.second-row {
		display: flex;
		align-items: center;
		grid-column: 3 / 5;
		grid-row: 3 / 5;
	}
`

function Projects() {
	return (
		<ProjectsWrapper>
			<h2>Proyectos</h2>
			<StyledGrid id='projects'>
				<TrackVisibility once partialVisibility className='left-col'>
					<ProjectCard
						direction='left'
						title='TellMaster'
						img={dice}
						url='https://tellmaster.herokuapp.com/'
						description={
							'Aplicación web desarrollada en React para crear y jugar historias interactivas. Crea un personaje, decide tú historia y sumergete en el mundo del rol.'
						}
						techs={['React', 'Node', 'Express', 'MongoDB', 'CKeditor', 'Hooks & Context']}
					/>
				</TrackVisibility>
				<TrackVisibility once partialVisibility className='first-row'>
					<ProjectCard
						direction='right'
						img={lab}
						title='HeroHeart'
						description={'Web de consulta de diagnosticos médicos realizada con HSB, Node.js y la api de '}
						techs={['HBS o handlebars', 'Node', 'Express', 'MongoDB', 'Axios']}
					/>
				</TrackVisibility>
				<TrackVisibility once partialVisibility className='second-row'>
					<ProjectCard
						direction='right'
						img={echodot}
						title='Nueva aventura'
						description={'Skill de Alexa desarrollada durante 2 semanas.'}
						techs={['Amazon polly', 'Mongodb', 'Express', 'Amazon dev. console']}
					/>
				</TrackVisibility>
			</StyledGrid>
		</ProjectsWrapper>
	)
}

export default Projects
