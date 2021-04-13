import styled from 'styled-components'
import dice from './assets/dice.jpg'
import echodot from './assets/alexa.jpg'
import lab from './assets/lab.jpg'
import TrackVisibility from 'react-on-screen'
import ProjectCard from './ProjectCard'

const StyledGrid = styled.div`
	display: grid;
	background-color: rgb(250, 250, 250);
	grid-template-columns: repeat(4, 1fr);
	grid-auto-rows: minmax(300px, auto);
	grid-gap: 1px;
	padding: 30px;

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
		<StyledGrid>
			<TrackVisibility once partialVisibility className='left-col'>
				<ProjectCard
					direction='left'
					img={dice}
					description={
						'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto voluptates ea quis voluptate ipsum cupiditate qui omnis tota blanditiis possimus voluptatem quod, quisquam optio rerum fuga facilis est repellendus sed!'
					}
				/>
			</TrackVisibility>
			<TrackVisibility once partialVisibility className='first-row'>
				<ProjectCard
					direction='right'
					img={lab}
					description={
						'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto voluptates ea quis voluptate ipsum cupiditate qui omnis tota blanditiis possimus voluptatem quod, quisquam optio rerum fuga facilis est repellendus sed!'
					}
				/>
			</TrackVisibility>
			<TrackVisibility once partialVisibility className='second-row'>
				<ProjectCard
					direction='right'
					img={echodot}
					description={
						'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto voluptates ea quis voluptate ipsum cupiditate qui omnis tota blanditiis possimus voluptatem quod, quisquam optio rerum fuga facilis est repellendus sed!'
					}
				/>
			</TrackVisibility>
		</StyledGrid>
	)
}

export default Projects
