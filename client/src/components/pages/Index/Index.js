import React from 'react'
import Hero from './Hero'
import AboutMe from './AboutMe'
import { Divider } from '@material-ui/core'

import Projects from './Projects'
const IndexPage = () => {
	return (
		<>
			<Hero />
			<Divider />
			<Projects />
			<Divider />
			<AboutMe />
		</>
	)
}

export default IndexPage
