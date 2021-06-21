import React from 'react'
import styled from 'styled-components'

const TechCardWrapper = styled.div`
	width: 100%;
	text-align: center;
	
	img {
		height: 15vh;
	}
	@media only screen and (min-width: 800px) {
	}

	@media only screen and (min-width: 1200px) {
	}
`

export const TechCard = ({ imgUrl, name }) => (
	<TechCardWrapper>
		<img src={imgUrl} alt={name} />
		<h2>{name}</h2>
	</TechCardWrapper>
)
