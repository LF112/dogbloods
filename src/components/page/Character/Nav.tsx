import React from 'react'
import styled from 'styled-components'
//[ package ]

//=> DOM
export default (props: any) => {
	const { choose, setChoose, list } = props
	return (
		<Main>
			<div>
				{list.map((text: string, index: number) => (
					<h1
						key={index}
						className={choose === index ? 'choose' : ''}
						onClick={() => {
							setChoose(index)
						}}>
						{text}
					</h1>
				))}
			</div>
			<nav />
		</Main>
	)
}

//=> Style
const Main = styled.main`
	position: absolute;
	width: 100%;
	bottom: 2%;
	margin-bottom: 70px;
	height: 75px;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 100;
	> div {
		padding: 10px 8px;
		border: 4px solid #1f1f1f;
		border-radius: 1px;
		display: flex;

		> h1 {
			color: #d5d5d5;
			font-size: 15px;
			line-height: 1;
			font-family: 'REEJI-PinboGB';
			user-select: none;
			cursor: pointer;
			padding: 0 5px;
			&:hover {
				color: #c3c3c3;
				transform: scale(0.98);
			}
		}

		> h1 + h1 {
			margin-left: 10px;
		}

		.choose {
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;
			animation: animate 2.5s linear infinite;
			background-size: 100px 100px;
			background-image: linear-gradient(
				to right bottom,
				#1f1f1f 0%,
				#1f1f1f 25%,
				#ffec5d 25%,
				#ffec5d 50%,
				#1f1f1f 50%,
				#1f1f1f 75%,
				#ffec5d 75%,
				#ffec5d 100%
			);
		}
	}
	> nav {
		height: 43px;
		width: 4px;
		background: #1f1f1f;
		border-radius: 1px;
		margin: 3px;
	}
`
