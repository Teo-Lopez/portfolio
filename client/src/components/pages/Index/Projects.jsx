import styled from 'styled-components'

import TrackVisibility from 'react-on-screen'
import ProjectOverview from './ProjectOverview'
import { Grid } from '@material-ui/core'
import data from './projectsData'

const ProjectsWrapper = styled.section`
	h2 {
		text-align: center;
		font-size: 2.3rem;
		letter-spacing: 3px;
		font-weight: 200;
	}
	 @media (min-width: 600px) {
    h2 {
			font-size: 2.7rem;
		}
  }
	@media (min-width: 1200px) {
    .grid{
			margin: 0 auto;
			width: 90%;
		}
  }
`

function Projects() {
	return (
		<ProjectsWrapper id='projects' className='projects'>
			<h2>Proyectos</h2>
			<div className="grid">
				<Grid container spacing={3}>
					{data.map((elm, idx) => (
						<Grid key={idx} item xs={12} md={6}>
							<TrackVisibility once partialVisibility className='project'>
								<ProjectOverview
									img={elm.img}
									title={elm.title}
									description={elm.description}
									techs={elm.techs}
									url={elm.url}
								/>
							</TrackVisibility>
						</Grid>
					))}
				</Grid>
			</div>
		</ProjectsWrapper>
	)
}

export default Projects
