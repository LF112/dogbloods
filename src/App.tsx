import React from 'react'
import styled from 'styled-components'
//[ package ]

//=> Main Component
export default () => {
	return (
		<Main>
			<h1>你好，世界！</h1>
			<p>
				Powered by <span>React</span>
			</p>
		</Main>
	)
}

//=> Style Component
const Main = styled.main`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	> h1 {
		font-size: 50px;
		font-weight: bold;
		color: #fff;
	}
	> p {
		color: rgba(255, 255, 255, 0.75);
		font-size: 20px;
		font-family: 'Poppins';
		> span {
			font-family: 'Poppins';
			font-weight: bold;
			color: rgba(255, 255, 255, 0.82);
		}
	}
`
