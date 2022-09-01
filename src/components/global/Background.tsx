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
			<div ref={node}>
				<img src={CG1} data-depth='0.1' />
			</div>
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
	> div {
		> img {
			width: 101%;
			height: 100%;
			margin-left: -1%;
			object-fit: cover;
			object-position: 28% 0%;
		}
	}
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

const Flash = styled.div`
	position: absolute;
	width: 100%;
	height: calc(100% - 8%);
	top: 8%;
	left: 0;
	z-index: 1;
	background: linear-gradient(to bottom, hsl(0deg, 0%, 0%, 62%), transparent);
	animation-name: breath;
	animation-duration: 3s;
	animation-timing-function: ease-in-out;
	animation-iteration-count: infinite;
	@keyframes breath {
		from {
			opacity: 0.4;
		}
		50% {
			opacity: 0.7;
		}
		to {
			opacity: 0.4;
		}
	}
`
