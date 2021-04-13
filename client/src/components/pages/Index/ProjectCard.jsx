import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
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
	margin: auto;
	height: 100%;
	background-image: ${({ img }) => `url(${img})`};
	background-size: cover;
	background-repeat: no-repeat;
	object-fit: contain;
	filter: grayscale(0.8);

	&:hover .cover {
		transition: background-color 700ms;
		background-color: rgba(13, 13, 13, 0.8);
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
	}

	.innerWrapper {
		user-select: none;
		margin: 20px 50px;
		color: rgb(250, 250, 250);
		font-size: 1.8em;
		text-align: center;
		opacity: 0;
		transition: opacity 700ms;
	}

	&:hover .innerWrapper {
		opacity: 1;
		transition: opacity 700ms;
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

function ProjectCard({ img, description, isVisible, direction, url }) {
	return (
		<Card img={img} className={isVisible && (direction === 'left' ? 'appearLeft' : 'appearRight')}>
			<Link as='div' to={'url'} className='cover'>
				<div className='innerWrapper'>
					<h3>Titulo proyecto</h3>
					<p>{description}</p>
				</div>
			</Link>
		</Card>
	)
}

export default ProjectCard
