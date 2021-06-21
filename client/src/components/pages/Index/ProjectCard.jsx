const ProjectCard = ({ img, title, description, isVisible, direction, url, techs = [] }) => {
	const appearClass = direction === 'left' ? 'appearLeft' : 'appearRight'
	return (
		<div img={img} className={isVisible && appearClass}>
			<a href={url} target='_blank' className='cover' rel='noreferrer'>
				<div className='innerWrapper'>
					<h3 className='underScore'>{title}</h3>
					<p>{description}</p>
					<hr />
					<footer className='tech-wrapper'>
						<h4 className='underScore'>Tecnologías:</h4>
						<p>{techs.map((elm, idx) => `${elm}${idx === techs.length - 1 ? '.' : ','} `)}</p>
					</footer>
				</div>
			</a>
		</div>
	)
}

export default ProjectCard

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345
//   },
//   media: {
//     height: 140
//   }
// })
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// export default function MediaCard() {
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image="/static/images/cards/contemplative-reptile.jpg"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }
