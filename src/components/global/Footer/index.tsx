import React from 'react'
import styled from 'styled-components'
//[ package ]

//=> DOM
export default () => {
	return (
		<Footer>
			<div></div>
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
		height: 38px;
		padding: 0 5%;
		display: flex;
		align-items: center;
	}
`
