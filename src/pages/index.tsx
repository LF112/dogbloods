import React, { Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom'
//[ package ]

//=> DOM
export default () => {
	//=> LazyLoad
	const _page = new Object() // 暂存页面对象
	const pageModule = import.meta.glob('./**') //=> Vite 导入 PAGE 目录
	Object.keys(pageModule).forEach(key => {
		//=> 仅选择每个子目录下的 index.tsx
		const pageSplit = key.split('/')
		if (/index.tsx/gim.test(key) && pageSplit.length <= 3)
			_page[pageSplit[1]] = React.lazy(pageModule[key] as any)
	})

	//=> PAGE COMPONENT | '页面组件懒加载容器'
	const PAGE = (name: string) => {
		const PageComponent = _page[name] // 取出页面
		return (
			<Suspense fallback={<></>}>
				<PageComponent />
			</Suspense>
		)
	}

	//=> 更改默认路径为 /#/ | '仅 location key 为默认时'
	const navigate = useNavigate()
	const location = useLocation()
	useEffect(() => {
		const { key } = location
		if (key === 'default') navigate('/')
	}, [location.key])

	return (
		<Routes>
			<Route path={`/`} element={PAGE('Home')} />
			<Route path={`/pv`} element={PAGE('Pv')} />
			<Route path={`/story`} element={PAGE('Story')} />
			<Route path={`/about`} element={PAGE('About')} />
			<Route path={`/character`} element={PAGE('Character')} />
			<Route path={`/merchandise`} element={PAGE('Merchandise')} />
		</Routes>
	)
}
