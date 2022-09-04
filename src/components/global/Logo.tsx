import React from 'react'
import styled from 'styled-components'
//[ package ]

import LOGO_IMG from 'assets/webp/WetDogs.webp'
//[ assets ]

//=> DOM
export default () => {
	return (
		<Main>
			<img src={LOGO_IMG} alt='WetDogs' />
			<LogoText>
				<h1>WETDOGS</h1>
				<p>Independent game production team</p>
			</LogoText>
		</Main>
	)
}

//=> Style
const Main = styled.main`
	width: 100%;
	height: 52px;
	display: flex;
	align-items: center;
	> img {
		height: 100%;
		margin-left: -12px;
		object-fit: cover;
		pointer-events: none;
	}
`

const LogoText = styled.div`
	height: 100%;
	margin-left: 8px;
	padding: 2px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	> h1 {
		color: #fff;
		font-size: 22px;
		font-family: 'Lexend Exa', sans-serif;
		/* -webkit-text-fill-color: transparent;
		background: linear-gradient(92deg, #ffe82c -1.37%, #e8bc23 78.71%);
		-webkit-background-clip: text; */
		text-shadow: rgba(6, 7, 25, 50%) 0.05em 0.05em 0px;
	}
	> p {
		color: hsl(0deg, 0%, 100%, 72%);
		font-size: 12px;
		font-family: 'Play', sans-serif;
		line-height: 1;
		text-shadow: rgba(6, 7, 25, 50%) 0.05em 0.05em 0px;
	}
`
