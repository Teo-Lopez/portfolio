import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Tabs, Tab, Typography, Box, CardMedia, Card, CardActionArea, CardContent } from '@material-ui/core'
import styled from 'styled-components'

function TabPanel(props) {
	const { children, value, index, ...other } = props

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	)
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`
	}
}

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
	media: {
		height: 280
	},
	headers: {
		fontSize: '1.5rem!important',
	},
	'@media (min-width: 600px)': {
		headers: {
			fontSize: "2rem!important"
		},
		text: {
			fontSize: "1.2rem"
		}
	},
	'@media (min-width: 950px)': {
		root: {
			height: "638px"
		}
	},
	'@media (min-width: 1200px)': {
		root: {
			height: "720px",
			alignItems: "flex-end"
		},
		media: {
			height: 420,
			filter: "grayScale(.4)"
		},
		text: {
			textAlign: "center"
		}
	}
}))

//TODO FUSIONAR CON M-UI
const Wrapper = styled.div`
	margin: 16px;
	 @media (min-width: 600px) {
    margin: 32px;
  }

`

const ProjectOverview = ({ img, title, description, url, techs = [] }) => {
	const classes = useStyles()
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<Wrapper>
			<Card className={classes.root}>
				<CardMedia className={classes.media} image={img} title={title} />
				<CardActionArea >
					<CardContent>
						<TabPanel value={value} index={0}>
							<Typography gutterBottom className={classes.headers} variant='h6' component='h2'>
								{title}
							</Typography>
							<Typography className={classes.text} variant='body2' color='textSecondary' component='p'>
								{description}
							</Typography>
						</TabPanel>
						<TabPanel value={value} index={1}>
							<Typography className={classes.headers} variant='h6' component='h2' gutterBottom>
								Tecnologías
							</Typography>
							<Typography color='textSecondary' component='p'>
								{techs.map((elm, idx) => `${elm}${idx === techs.length - 1 ? '.' : ','} `)}
							</Typography>
						</TabPanel>
					</CardContent>
				</CardActionArea>
			</Card>
			<AppBar position='static'>
				<Tabs value={value} onChange={handleChange} aria-label='simple tabs example'>
					<Tab label='Descripción' {...a11yProps(0)} />
					<Tab label='Tecnologías' {...a11yProps(1)} />
					<Tab
						style={{ position: 'absolute', right: '0' }}
						label='Visit'
						href={url}
						target='_blank'
						size='small'
						color='primary'
						rel='noreferrer'
					/>
				</Tabs>
			</AppBar>
		</Wrapper>
	)
}

export default ProjectOverview
