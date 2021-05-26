import React from 'react'
import styled, { keyframes } from 'styled-components'

const appearRight = keyframes`
  from {
    overflow: hidden;
    transform: translate(400px, 0);
     opacity: 0
  }
  to {
    overflow: initial;
    transform: translate(0, 0);
     opacity: 1
  }
`

const appearLeft = keyframes`
  from {
    overflow: hidden;
    transform: translate(-400px, 0);
     opacity: 0
  }
  to {
    overflow: initial;
    transform: translate(0, 0);
     opacity: 1
  }
`

const Card = styled.article`
	display: flex;
	align-items: center;
	justify-content: space-around;
	height: 100%;
	width: 100%;
	box-sizing: border-box;
	background-image: ${({ img }) => `url(${img})`};
	background-size: cover;
	background-repeat: no-repeat;
	object-fit: contain;
	transition: filter 700ms;
	filter: grayscale(0.4) brightness(0.7);

	.cover {
		height: 100%;
		width: 100%;
		display: flex;
		transition: background-color 700ms;
		align-items: center;
	}

	&:hover {
		transition: filter 700ms;
		filter: grayscale(0) brightness(1);

		.cover {
			transition: background-color 700ms;
			background-color: rgba(13, 13, 13, 0.6);
		}
		.innerWrapper {
			opacity: 1;
			transition: opacity 700ms;
		}
	}
	.underScore {
		display: inline-block;
		border-bottom: 1px solid rgba(250, 250, 250, 0.8);
	}

	.innerWrapper {
		user-select: none;
		margin: 20px 50px;
		color: rgb(250, 250, 250);
		font-size: 1.8em;
		width: 100%;
		text-align: center;
		opacity: 0;
		transition: opacity 700ms;
	}
	h3 {
		font-size: 1.2em;
		font-weight: 300;
		letter-spacing: 4px;
	}
	p {
		font-weight: 100;
	}

	.tech-wrapper {
		width: 80%;
		margin: 0 auto;
		h4 {
			font-size: 0.8em;
		}
	}

	&.appearRight {
		animation-name: ${() => appearRight};
		animation-duration: 1s;
		animation-timing-function: ease-out;
	}
	&.appearLeft {
		animation-name: ${() => appearLeft};
		animation-duration: 1s;
		animation-timing-function: ease-out;
	}
`

function ProjectCard({ img, title, description, isVisible, direction, url, techs = [] }) {
	return (
		<Card img={img} className={isVisible && (direction === 'left' ? 'appearLeft' : 'appearRight')}>
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
		</Card>
	)
}

export default ProjectCard