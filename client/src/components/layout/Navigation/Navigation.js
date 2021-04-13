import { createRef, useEffect, useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

import { NavLink, Link } from 'react-router-dom'

import './Navigation.css'

const nav = createRef()

const Navigation = () => {
	const [isTransparent, setIsTransparent] = useState(false)
	const handleScroll = () => {
		console.log(window.scrollY, window.innerHeight)
		if (window.scrollY > window.innerHeight) {
			setIsTransparent(true)
		} else {
			setIsTransparent(false)
		}
	}
	useEffect(() => {
		document.addEventListener('scroll', handleScroll)
		return () => document.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<Navbar ref={nav} sticky id='navbar' className={isTransparent && 'transparent'} expand='md' fixed='top'>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav' className='justify-content-around'>
				<NavLink to='#welcome'>Welcome</NavLink>
				<NavLink to='#about-me'>About me</NavLink>
				<NavLink to='#Skills'>Skills</NavLink>
				<NavLink to='#projects'>Projects</NavLink>
				<NavLink to='#contact'>Contact</NavLink>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default Navigation
