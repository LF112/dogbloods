import React from 'react'
import styled from 'styled-components'
//[ package ]

//=> DOM
export default () => {
	return (
		<Button>
			<div />
			<h1 className='cyber' data-text={'立即下载'}>
				立即下载
			</h1>
			<nav />
		</Button>
	)
}

//=> Style
const Button = styled.button`
	position: relative;
	height: 60px;
	padding: 0 18px;
	font-size: 14px;
	border-radius: 2px;
	outline: none;
	line-height: 1;
	white-space: nowrap;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 10px;
	/* background-color: rgba(0, 0, 0, 15%); */
	backdrop-filter: blur(2px);
	overflow: hidden;
	> h1 {
		position: relative;
		color: rgba(253, 236, 101);
		font-size: 20px;
		line-height: 1;
		font-family: 'REEJI-PinboGB';
		margin: 0 8px;
		user-select: none;
		:after {
			display: block;
		}
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
	> nav {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: 4px solid #ffec5d;
		opacity: 0;
		z-index: 0;
	}
	&:hover {
		transform: scale(0.96);
		> nav {
			opacity: 1;
		}
		:before,
		:after,
		> :first-child:before,
		> :first-child:after {
			border-color: #1f1f1f;
		}
	}
	&:active {
		transform: scale(1);
	}
	:before,
	:after,
	> :first-child:before,
	> :first-child:after {
		position: absolute;
		width: 10px;
		height: 10px;
		border-style: solid;
		content: ' ';
		border-radius: 1px;
		border-color: #ffec5d;
		z-index: 1;
	}
	:before {
		top: 0;
		left: 0;
		border-width: 4px 0 0 4px;
	}
	:after {
		top: 0;
		right: 0;
		border-width: 4px 4px 0 0;
	}
	> :first-child {
		width: 100%;
		position: absolute;
		bottom: 0;
	}
	> :first-child:before {
		bottom: 0;
		right: 0;
		border-width: 0 4px 4px 0;
	}
	> :first-child:after {
		bottom: 0;
		left: 0;
		border-width: 0 0 4px 4px;
	}
`
