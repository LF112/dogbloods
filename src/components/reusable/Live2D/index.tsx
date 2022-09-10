/*
 * @Author: LF112 (futiwolf) <lf@lf112.net>
 * @License: GNU Affero General Public License v3.0
 *
 * Copyright (c) 2022 LF112 (futiwolf), All Rights Reserved.
 * 请注意，本项目使用 AGPL v3 开源协议开源，请严格依照开源协议进行不限于编辑、分发等操作。详见 https://www.chinasona.org/gnu/agpl-3.0-cn.html
 */
import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
//[ package ]

import {
	CubismLogFn,
	initModel,
	WebGl2Canvas,
	renderModel
} from './live2dManager'
//[ utils ]

import {
	CubismFramework,
	LogLevel
} from 'lib/live2dFramework/src/live2dcubismframework'
//[ libs ]

import { _live2dLoad } from 'store/status'
//[ store ]

//=> DOM
export default (props: any) => {
	const { l2dPath, l2dFileName } = props

	const node = useRef<HTMLCanvasElement>()
	const mainNode = useRef<HTMLElement>()

	useEffect(() => {
		//=> Main

		//=> 装载 Cubism SDK
		// 配置 Cubism SDK
		CubismFramework.startUp({
			logFunction: CubismLogFn, // 日志输出方法
			loggingLevel: LogLevel.LogLevel_Verbose // 日志级别
		}) // 'Cubism SDK 其实没啥可配置的，大无语'
		// 初始化 cubism SDK
		CubismFramework.initialize()

		const CANVAS = WebGl2Canvas(node.current, 1530, 929)
		//=> 装载模型
		initModel(CANVAS, l2dPath, l2dFileName, () => {
			_live2dLoad.set(true)
		})

		//=> 渲染模型
		renderModel(CANVAS)

		return () => {
			//=> 释放 Cubism SDK 实例
			CubismFramework.dispose()
			_live2dLoad.set(false)
		}
	}, [])

	return (
		<Main ref={mainNode}>
			<canvas ref={node} />
		</Main>
	)
}

//=> Style
const Main = styled.main`
	width: 410px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	canvas {
		pointer-events: none;
		touch-action: none;
		width: 1530px;
		height: 929px;
		transform: scale(0.71);
		cursor: inherit;
	}
`
