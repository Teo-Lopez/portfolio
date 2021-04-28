import React from 'react'
import styled from 'styled-components'

const TechCardWrapper = styled.div`
	text-align: center;
	width: 100%;
	h2 {
		margin-top: 6px;
	}
	img {
		max-height: 280px;
		object-fit: contain;
	}
`

export const TechCard = ({ imgUrl, name }) => (
	<TechCardWrapper>
		<img src={imgUrl} alt={name} />
		<h2>{name}</h2>
	</TechCardWrapper>
)
