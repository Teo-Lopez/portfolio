import styled from 'styled-components'
import dice from './assets/dice.jpg'
import echodot from './assets/alexa.jpg'
import chronopomo from './assets/chronopomo.png'
import lab from './assets/lab.jpg'
import TrackVisibility from 'react-on-screen'
import ProjectCard from './ProjectCard'
import ProjectOverview from './ProjectOverview'

const ProjectsWrapper = styled.section`
	h2 {
		text-align: center;
		font-size: 2.3rem;
		letter-spacing: 3px;
		font-weight: 200;
	}
`

const StyledGrid = styled.div``

function Projects() {
	return (
		<ProjectsWrapper className='projects'>
			<h2>Proyectos</h2>
			<StyledGrid id='projects'>
			<ProjectOverview></ProjectOverview>
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
