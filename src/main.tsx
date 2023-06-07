import React from 'react'
import { createRoot } from 'react-dom/client'
//[ package ]

import { GlobalStyle } from './_html/style'
//[ style ]

import App from './App'
//[ APP ]

//=> Render | 渲染页面
//=> 绑定渲染组件↓
createRoot(document.getElementById('WetDogs')).render(
	<>
		<GlobalStyle />
		{/* MAIN */}
		<App />
	</>
)

//=> 控制台徽章
if (process.env.NODE_ENV === 'production') console.clear()
console.log(
	'\n %c \u26a1FUTI  %c https://www.lf112.net %c  BY %cLF112 \n\n',
	'color: #fff; background: rgb(0, 145, 228); padding:5px 0;border-radius: 4px 0 0 4px',
	'background:#323842; padding:5px 0;',
	'color: #ffffff; background: rgba(49, 49, 49, 0.85); padding:5px 0;',
	'color: rgb(0, 145, 228); background: rgba(49, 49, 49, 0.85); padding:5px 0;border-radius: 0 4px 4px 0'
)
