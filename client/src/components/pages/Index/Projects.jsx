import styled from 'styled-components'
import dice from './assets/dice.jpg'
import echodot from './assets/alexa.jpg'
import chronopomo from './assets/chronopomo.png'
import lab from './assets/lab.jpg'
import TrackVisibility from 'react-on-screen'
import ProjectCard from './ProjectCard'

const ProjectsWrapper = styled.section`
	text-align: center;
	width: 100%;
	position: relative;
	background-color: black;
	color: white;

	h2 {
		font-size: 2.5em;
		letter-spacing: 6px;
		padding: 30px;
	}
`

const StyledGrid = styled.div`
	display: grid;
	grid-template-columns: 100%;
	grid-auto-rows: minmax(300px, auto);
	grid-gap: 0px;
	color: white;
	.project {
		display: flex;
		align-items: center;
	}

	.project:nth-of-type(1) {
		grid-column: 0 / 1;
		grid-row: 1 / 2;
	}

	@media only screen and (min-width: 870px) {
		.project {
			display: flex;
			align-items: center;
		}

		.project::nth-of-type(0) {
			grid-column: 1 / 3;
			grid-row: 1 / 3;
		}

		.project::nth-of-type(1) {
			grid-column: 3 / 5;
			grid-row: 1 / 3;
		}

		.project::nth-of-type(2) {
			grid-column: 3 / 5;
			grid-row: 3 / 5;
		}

		.project::nth-of-type(3) {
			grid-column: 3 / 5;
			grid-row: 5 / 7;
		}
	}
`

function Projects() {
	return (
		<ProjectsWrapper className='projects'>
			<h2>Proyectos</h2>
			<StyledGrid id='projects'>
				<TrackVisibility once partialVisibility className='project'>
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
				<TrackVisibility once partialVisibility className='project'>
					<ProjectCard
						direction='right'
						img={lab}
						title='HeroHeart'
						url='https://heroheart.herokuapp.com/'
						description={
							'Web de consulta de diagnosticos médicos realizada con HSB, Node.js y la api de '
						}
						techs={['HBS o handlebars', 'Node', 'Express', 'MongoDB', 'Axios']}
					/>
				</TrackVisibility>
				<TrackVisibility once partialVisibility className='project'>
					<ProjectCard
						direction='right'
						img={echodot}
						title='Nueva aventura'
						description={'Skill de Alexa desarrollada durante 2 semanas.'}
						techs={['Amazon polly', 'Mongodb', 'Express', 'Amazon dev. console']}
					/>
				</TrackVisibility>
				<TrackVisibility once partialVisibility className='project'>
					<ProjectCard
						direction='right'
						img={chronopomo}
						title='Pomodoro Clock'
						description={'Web app for Pomodoro inspired time management.'}
						techs={['React hooks', 'Mongo', 'Styled components']}
						url='https://chrono-pomo.herokuapp.com/'
					/>
				</TrackVisibility>
			</StyledGrid>
		</ProjectsWrapper>
	)
}

export default Projects
