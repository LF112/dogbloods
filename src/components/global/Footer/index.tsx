import React from 'react'
import styled from 'styled-components'
//[ package ]

import LOGO_IMG from 'assets/webp/WetDogs.webp'

//=> DOM
export default () => {
	return (
		<Footer>
			<div>
				<img src={LOGO_IMG} alt='WetDogs' />
				<LogoText>
					<h1>WETDOGS</h1>
					<p>Independent game production team</p>
				</LogoText>
			</div>
		</Footer>
	)
}

//=> Style
const Footer = styled.footer`
	width: 100%;
	height: 8%;
	display: flex;
	align-items: center;
	background: black;
	> div {
		width: 100%;
		height: 52px;
		padding: 0 5%;
		display: flex;
		align-items: center;
		> img {
			height: 100%;
			margin-left: -12px;
			object-fit: cover;
		}
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
	}
	> p {
		color: hsl(0deg, 0%, 100%, 72%);
		font-size: 12px;
		font-family: 'Play', sans-serif;
		line-height: 1;
	}
`
