import React from 'react'
import styled from 'styled-components'

const TechCardWrapper = styled.div`
	text-align: center;
	width: 100%;
	color: white;
	h2 {
		margin-top: 6px;
		font-size: 1em;
	}
	img {
		object-fit: contain;
	}

	@media only screen and (min-width: 800px) {
		h2 {
			font-size: 1.8em;
		}
	}

	@media only screen and (min-width: 1200px) {
		h2 {
			font-size: 2em;
		}
	}
`

export const TechCard = ({ imgUrl, name }) => (
	<TechCardWrapper>
		<img src={imgUrl} alt={name} />
		<h2>{name}</h2>
	</TechCardWrapper>
)
