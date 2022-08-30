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
	background: linear-gradient(18deg, rgb(8 53 51 / 25%), rgb(38 173 207 / 90%)),
		linear-gradient(333deg, rgba(39, 52, 64, 0.3), rgba(180, 255, 217, 0.08)),
		radial-gradient(
			circle at 77% 89%,
			rgb(37 210 149 / 80%),
			rgba(125, 163, 169, 0) 50%
		),
		radial-gradient(
			circle at 15% 95%,
			rgb(26 91 167 / 80%),
			rgba(125, 163, 169, 0) 43%
		),
		radial-gradient(
			circle at 65% 23%,
			rgb(119 151 139 / 40%),
			rgba(137, 151, 119, 0) 70%
		),
		radial-gradient(
			circle at 10% 0,
			rgba(187, 211, 204, 0.33),
			rgba(187, 211, 204, 0) 35%
		),
		radial-gradient(
			circle at 11% 100%,
			rgb(131 166 203 / 30%),
			rgba(131, 165, 203, 0) 30%
		);
`
