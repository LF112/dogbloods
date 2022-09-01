import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Parallax from 'parallax-js'
//[ package ]

import CG1 from 'assets/webp/CG1.webp'
import Dot from 'assets/gif/dot.gif'
//[ assets ]

//=> DOM
export default () => {
	const node = useRef<HTMLDivElement>()

	useEffect(() => {
		const ParallaxDOM = node?.current
		if (ParallaxDOM) {
			const $Parallax = new Parallax(ParallaxDOM)

			return () => $Parallax.disable()
		}
	}, [node])

	return (
		<Main>
			<Flash />
			<nav />
			<Scenes ref={node}>
				<img src={CG1} data-depth='0.1' />
			</Scenes>
		</Main>
	)
}

//=> Style
const Main = styled.main`
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	z-index: -1;
	> nav:before {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 3;
		background-image: url(${Dot});
		background-attachment: fixed;
		opacity: 0.4;
	}
`

const Scenes = styled.div`
	> img {
		width: 102%;
		height: 100%;
		margin-left: -2%;
		object-fit: cover;
		object-position: 28% 0%;
	}
	animation: wave 5s 0.1s infinite linear;
	transform: translate3d(0, 0, 0);
	transform-style: preserve-3d;
	backface-visibility: hidden;
`

const Flash = styled.div`
	position: absolute;
	width: 102%;
	height: calc(100% - 4%);
	top: 4%;
	left: -2%;
	z-index: 10;
	background: linear-gradient(to bottom, hsl(0deg, 0%, 0%, 62%), transparent);
	animation-name: breath;
	animation-duration: 3s;
	animation-timing-function: ease-in-out;
	animation-iteration-count: infinite;
`
