import React from 'react'
import Particles from 'react-particles-js'

function SkyBackground({ speed }) {
	return (
		<Particles
			style={{ position: 'absolute', width: '100%', height: '100%' }}
			params={{
				particles: {
					number: {
						value: 90,
						density: {
							enable: true,
							value_area: 315,
						},
					},
					color: {
						value: '#ffffff',
					},
					shape: {
						type: 'circle',
						stroke: {
							width: 0,
							color: '#000000',
						},
						polygon: {
							nb_sides: 5,
						},
					},
					opacity: {
						value: 0.5,
						random: true,
						anim: {
							enable: true,
							speed: 0.2,
							opacity_min: 0.3,
							sync: false,
						},
					},
					size: {
						value: 3,
						random: true,
						anim: {
							enable: true,
							speed: 1,
							size_min: 0.1,
							sync: false,
						},
					},
					line_linked: {
						enable: false,
						distance: 150,
						color: '#ffffff',
						opacity: 0.4,
						width: 1,
					},
					move: {
						enable: true,
						speed: speed,
						direction: 'none',
						random: true,
						straight: false,
						out_mode: 'out',
						bounce: false,
						attract: {
							enable: false,
							rotateX: 600,
							rotateY: 1200,
						},
					},
				},
				interactivity: {
					detect_on: 'canvas',
					events: {
						onhover: {
							enable: false,
							mode: 'repulse',
						},
						onclick: {
							enable: false,
							mode: 'push',
						},
						resize: true,
					},
					modes: {
						grab: {
							distance: 400,
							line_linked: {
								opacity: 1,
							},
						},
						bubble: {
							distance: 400,
							size: 40,
							duration: 2,
							opacity: 8,
							speed: 3,
						},
						repulse: {
							distance: 200,
							duration: 0.4,
						},
						push: {
							particles_nb: 4,
						},
						remove: {
							particles_nb: 2,
						},
					},
				},
			}}
		></Particles>
	)
}

export default SkyBackground
