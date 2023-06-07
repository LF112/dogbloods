import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
//[ package ]

//[ components ]

import { _pageLoad, $ } from 'store/status'
//[ store ]

import useToggle from 'utils/useToggle'
//[ utils ]

const URL = `http://storage.live.com/items/E6563FC4FBE3BDD4!5044:/Dogbloods.mp4?&authkey=AIo6RFEF6evtpYA`

//=> DOM
export default () => {
	//const videoNode = useRef<ReactPlayer>()

	const [playing, setPlaying] = useToggle(false)

	//=> MAIN EFFECTS
	const [SHOW, setSHOW] = useState<Boolean>(false)
	const pageLoad = $(_pageLoad)
	useEffect(() => {
		if (!pageLoad) {
			setPlaying(true)
			// _coverHeight.set(9)
		}

		return () => setPlaying(false)
	}, [''])

	return (
		<Main
			style={SHOW && !pageLoad ? { animation: 'FadeOut 0.5s forwards' } : {}}
			onClick={() => setPlaying()}
		>
			<ReactPlayer
				//ref={videoNode}
				playing={playing}
				loop={true}
				url={URL}
				width='100%'
				height='110%'
				onReady={() => {
					_pageLoad.set(true)
					setSHOW(true)
				}}
			/>
		</Main>
	)
}

//=> Style
const Main = styled.main`
	width: 100%;
	height: 100vh;
	transform: scale(1.05);
	animation: FadeIn 0.25s forwards;
`
