import { createRef, useEffect, useState } from 'react'
import { Navbar } from 'react-bootstrap'

import { NavLink } from 'react-router-dom'

import './Navigation.css'

const nav = createRef()

const Navigation = () => {
	const [isTransparent, setIsTransparent] = useState(false)
	const handleScroll = () => {
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
				<a href='#welcome'>Welcome</a>
				<a href='#about-me'>About me</a>
				<a href='#projects'>Projects</a>
				<a href='#contact'>Contact</a>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default Navigation
