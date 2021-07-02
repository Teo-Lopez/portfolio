import {
	AppBar,
	Toolbar,
	makeStyles,
	Button,
	IconButton,
	Drawer,
	Link,
	MenuItem,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import React, { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'


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

const useStyles = makeStyles(theme => ({
	header: {
		paddingRight: '79px',
	},
	logo: {
		userSelect: "none",
		fontSize: "1.4rem",
		fontWeight: 600,
		letterSpacing: "5px",
		textAlign: 'center',
		margin: '6px auto',
		color: theme.palette.primary.contrastText
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
		backgroundColor: theme.palette.primary.main
	},
	'@media (min-width: 890px)': {
		header: {
			padding: 0
		},
		logo: {
			margin: 0,
		}
	},
	'@media (min-width: 1200px)': {
		header: {
			padding: "0 36px",
		},
		toolbar: {
			justifyContent: "center"
		},
		menuButton: {
			fontSize: "1rem",
			letterSpacing: "2px",
			fontWeight: 100
		},
		logo: {
			marginRight: "60px",
		}
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
					{brandLogo}
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

	const brandLogo = <p className={logo}>TL</p>

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
