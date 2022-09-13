import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
//[ package ]

//[ components ]

import { _pageLoad, $ } from 'store/status'
//[ store ]

import useToggle from 'utils/useToggle'
//[ utils ]

const URL = `https://video.busiyi.world/bili.mp4?aid=259631602&bvid=BV1na411d79D&cid=806927431`

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
			onClick={() => setPlaying()}>
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
	animation: FadeIn 0.25s forwards;
	> div {
		margin-top: -2%;
	}
`
