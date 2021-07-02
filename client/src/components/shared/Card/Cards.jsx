import React from 'react'
import styled from 'styled-components'

const TechCardWrapper = styled.div`
	width: 100%;
	text-align: center;
	
	img {
		height: 15vh;
	}
	@media only screen and (min-width: 600px) {
		img {
			height: 150px
		}
	}

	@media only screen and (min-width: 1200px) {
		img {
			height: 200px
		}
	}
`

export const TechCard = ({ imgUrl, name }) => (
	<TechCardWrapper>
		<img src={imgUrl} alt={name} />
		<h2>{name}</h2>
	</TechCardWrapper>
)
