// const ProjectCard = ({ img, title, description, isVisible, direction, url, techs = [] }) => {
// 	const appearClass = direction === 'left' ? 'appearLeft' : 'appearRight'
// 	return (
// 		<div img={img} className={isVisible && appearClass}>
// 			<a href={url} target='_blank' className='cover' rel='noreferrer'>
// 				<div className='innerWrapper'>
// 					<h3 className='underScore'>{title}</h3>
// 					<p>{description}</p>
// 					<hr />
// 					<footer className='tech-wrapper'>
// 						<h4 className='underScore'>Tecnologías:</h4>
// 						<p>{techs.map((elm, idx) => `${elm}${idx === techs.length - 1 ? '.' : ','} `)}</p>
// 					</footer>
// 				</div>
// 			</a>
// 		</div>
// 	)
// }

// export default ProjectCard

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
	root: {}
})
export default function ProjectCard({ img, title, description, url }) {
	const classes = useStyles()
	console.log({ img })
	return <></>
}
