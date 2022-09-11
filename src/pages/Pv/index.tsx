import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
//[ package ]

//[ components ]

import { _pageLoad, $ } from 'store/status'
//[ store ]

import useToggle from 'utils/useToggle'
//[ utils ]

const URL = `https://cn-gddg-dx-bcache-10.bilivideo.com/upgcxcode/31/74/806927431/806927431-1-208.mp4?e=ig8euxZM2rNcNbRMhbdVhwdlhWKghwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1662880092&gen=playurlv2&os=akam&oi=839951780&trid=7fa183c3bbfe4cbca76a6d45220fcc84T&mid=0&platform=html5&upsig=5803a5d1de2530dd47dfe63f838d289e&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&hdnts=exp=1662872892~hmac=1e8643c546726cd67c74467363ef9e8efc8eca3d8e1b3c8603a62e69254d60c4&bvc=vod&nettype=0&bw=142120&orderid=0,1&logo=80000000`

//=> DOM
export default () => {
	//const videoNode = useRef<ReactPlayer>()

	const [playing, setPlaying] = useToggle(true)

	//=> MAIN EFFECTS
	const [SHOW, setSHOW] = useState<Boolean>(false)
	const pageLoad = $(_pageLoad)
	useEffect(() => {
		// if (!pageLoad) {

		// 	// _coverHeight.set(9)
		// }

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
