import { createRef, useEffect, useState } from 'react'
import { Navbar, NavDropdown } from 'react-bootstrap'

import './Navigation.css'

const nav = createRef()

const Navigation = () => {
	const [isTransparent, setIsTransparent] = useState(false)
	const handleScroll = () => {
		// if (window.scrollY > window.innerHeight) {
		// 	setIsTransparent(true)
		// } else {
		// 	setIsTransparent(false)
		// }
	}
	useEffect(() => {
		document.addEventListener('scroll', handleScroll)
		return () => document.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<Navbar ref={nav} sticky id='navbar' 	expand='md' fixed='top' variant='dark'>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav' className='justify-content-around'>
				<NavDropdown.Item as={'a'} href='#welcome'>
					Welcome
				</NavDropdown.Item>

				<NavDropdown.Item as={'a'} href='#about-me'>
					About me
				</NavDropdown.Item>
				<NavDropdown.Item as={'a'} href='#projects'>
					Projects
				</NavDropdown.Item>
				<NavDropdown.Item as={'a'} href='#contact'>
					Contact
				</NavDropdown.Item>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default Navigation
