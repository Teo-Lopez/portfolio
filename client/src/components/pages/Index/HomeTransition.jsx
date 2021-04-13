import React from 'react'
import styled, { keyframes } from 'styled-components'

const scaleDown = keyframes`scaleDown {
	to { opacity: 0; transform: scale(.5); }
}`

const Wrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	perspective: 1200px;
	transform-style: preserve-3d;
`
const Curtain = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	transform: translate3d(0, 0, 0);
	animation: ${scaleDown} 7s ease both;
	background-color: black;
`

function HomeTransition() {
	return (
		<Wrapper>
			<Curtain />
		</Wrapper>
	)
}

export default HomeTransition
