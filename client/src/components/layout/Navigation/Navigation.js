import {
	AppBar,
	Toolbar,
	makeStyles,
	Button,
	IconButton,
	Drawer,
	Link,
	MenuItem
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import React, { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import brandSvg from './teologo.svg'

const headersData = [
	{
		label: 'Welcome',
		href: '#welcome'
	},
	{
		label: 'Projects',
		href: '#projects'
	},
	{
		label: 'About me',
		href: '#about-me'
	}
]

const useStyles = makeStyles(() => ({
	header: {
		backgroundColor: 'rgb(0, 0,0)',
		color: 'rgb(250,250,250)',
		paddingRight: '79px',
		paddingLeft: '118px',
		'@media (max-width: 900px)': {
			paddingLeft: 0
		}
	},
	logo: {
		height: '50px',
		fontFamily: 'Work Sans, sans-serif',
		fontWeight: 600,
		color: 'rgb(11,11,11)',
		textAlign: 'left',
		margin: '6px auto',
		display: 'block'
	},
	menuButton: {
		fontFamily: 'Open Sans, sans-serif',
		fontWeight: 700,
		size: '18px',
		marginLeft: '38px'
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	paper: {
		backgroundColor: 'rgb(0, 0,0)',
		color: 'rgb(250,250,250)'
	},
	drawerContainer: {
		padding: '20px 30px'
	}
}))

const Navigation = () => {
	const { header, logo, menuButton, toolbar, drawerContainer, paper } = useStyles()

	const [state, setState] = useState({
		mobileView: false,
		drawerOpen: false
	})

	const { mobileView, drawerOpen } = state

	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 900
				? setState(prevState => ({ ...prevState, mobileView: true }))
				: setState(prevState => ({ ...prevState, mobileView: false }))
		}

		setResponsiveness()

		window.addEventListener('resize', () => setResponsiveness())

		return () => {
			window.removeEventListener('resize', () => setResponsiveness())
		}
	}, [])

	const displayDesktop = () => {
		return (
			<Toolbar className={toolbar}>
				{brandLogo}
				<div>{getMenuButtons()}</div>
			</Toolbar>
		)
	}

	const displayMobile = () => {
		const handleDrawerOpen = () => setState(prevState => ({ ...prevState, drawerOpen: true }))
		const handleDrawerClose = () => setState(prevState => ({ ...prevState, drawerOpen: false }))

		return (
			<Toolbar>
				<IconButton
					{...{
						edge: 'start',
						color: 'inherit',
						'aria-label': 'menu',
						'aria-haspopup': 'true',
						onClick: handleDrawerOpen
					}}
				>
					<MenuIcon />
				</IconButton>

				<Drawer
					{...{
						classes: { paper },
						anchor: 'left',
						open: drawerOpen,
						onClose: handleDrawerClose
					}}
				>
					<div>{brandLogo}</div>
					<div className={drawerContainer}>{getDrawerChoices()}</div>
				</Drawer>
			</Toolbar>
		)
	}

	const getDrawerChoices = () => {
		return headersData.map(({ label, href }) => {
			return (
				<Link
					{...{
						component: HashLink,
						to: href,
						color: 'inherit',
						style: { textDecoration: 'none' },
						key: label
					}}
				>
					<MenuItem>{label}</MenuItem>
				</Link>
			)
		})
	}

	const brandLogo = <img className={logo} src={brandSvg} alt='brand logo' />

	const getMenuButtons = () => {
		return headersData.map(({ label, href }) => {
			return (
				<Button
					{...{
						key: label,
						color: 'inherit',
						to: href,
						component: HashLink,
						className: menuButton
					}}
				>
					{label}
				</Button>
			)
		})
	}

	return (
		<header>
			<AppBar className={header}>{mobileView ? displayMobile() : displayDesktop()}</AppBar>
		</header>
	)
}

export default Navigation
