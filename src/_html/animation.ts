import { css } from 'styled-components'
//[ package ]

//=> Style
export const AnimationCSS = css`
	.an-active {
		animation-play-state: running;
	}
	.an-paused {
		animation-play-state: paused;
	}

	@supports (
		(-webkit-clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%)) or
			(clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%))
	) {
		.cyber:after {
			display: none;
			content: attr(data-text);
			left: 4px;
			position: absolute;
			text-shadow: 2px 1px #1f1f1f, -2px -2px #ffec5d;
			top: 2px;
			width: 100%;
			z-index: 2;
			animation-direction: alternate;
			animation-duration: 2s;
			animation-iteration-count: infinite;
			animation-name: glitch;
			animation-timing-function: linear;
		}
	}

	@keyframes wave {
		0% {
			transform: rotateZ(360deg) translate3d(0, 1%, 0) rotateZ(-360deg);
		}
		100% {
			transform: rotateZ(0deg) translate3d(0, 1%, 0) rotateZ(0deg);
		}
	}

	@keyframes animate {
		100% {
			background-position: 100px 0;
		}
	}

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

	@keyframes glitch {
		0% {
			clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
			opacity: 1;
			transform: translateZ(0);
		}

		2% {
			-webkit-clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
			clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
			-webkit-transform: translate(-5px);
			transform: translate(-5px);
		}

		6% {
			-webkit-clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
			clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
			-webkit-transform: translate(5px);
			transform: translate(5px);
		}

		8% {
			-webkit-clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
			clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
			-webkit-transform: translate(-5px);
			transform: translate(-5px);
		}

		9% {
			-webkit-clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
			clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
			-webkit-transform: translate(0);
			transform: translate(0);
		}

		10% {
			-webkit-clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);
			clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);
			-webkit-transform: translate3d(5px, 0, 0);
			transform: translate3d(5px, 0, 0);
		}

		13% {
			-webkit-clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);
			clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);
			-webkit-transform: translateZ(0);
			transform: translateZ(0);
		}

		13.1% {
			-webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
			clip-path: polygon(0 0, 0 0, 0 0, 0 0);
			-webkit-transform: translate3d(5px, 0, 0);
			transform: translate3d(5px, 0, 0);
		}

		15% {
			-webkit-clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);
			clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);
			-webkit-transform: translate3d(5px, 0, 0);
			transform: translate3d(5px, 0, 0);
		}

		20% {
			-webkit-clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);
			clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);
			-webkit-transform: translate3d(-5px, 0, 0);
			transform: translate3d(-5px, 0, 0);
		}

		20.1% {
			-webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
			clip-path: polygon(0 0, 0 0, 0 0, 0 0);
			-webkit-transform: translate3d(5px, 0, 0);
			transform: translate3d(5px, 0, 0);
		}

		25% {
			-webkit-clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);
			clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);
			-webkit-transform: translate3d(5px, 0, 0);
			transform: translate3d(5px, 0, 0);
		}

		30% {
			-webkit-clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);
			clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);
			-webkit-transform: translate3d(-5px, 0, 0);
			transform: translate3d(-5px, 0, 0);
		}

		30.1% {
			-webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
			clip-path: polygon(0 0, 0 0, 0 0, 0 0);
		}

		35% {
			-webkit-clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
			clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
			-webkit-transform: translate(-5px);
			transform: translate(-5px);
		}

		40% {
			-webkit-clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
			clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
			-webkit-transform: translate(5px);
			transform: translate(5px);
		}

		45% {
			-webkit-clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
			clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
			-webkit-transform: translate(-5px);
			transform: translate(-5px);
		}

		50% {
			-webkit-clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
			clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
			-webkit-transform: translate(0);
			transform: translate(0);
		}

		55% {
			-webkit-clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);
			clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);
			-webkit-transform: translate3d(5px, 0, 0);
			transform: translate3d(5px, 0, 0);
		}

		60% {
			-webkit-clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);
			clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);
			opacity: 1;
			-webkit-transform: translateZ(0);
			transform: translateZ(0);
		}

		60.1% {
			-webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
			clip-path: polygon(0 0, 0 0, 0 0, 0 0);
			opacity: 1;
		}

		to {
			-webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
			clip-path: polygon(0 0, 0 0, 0 0, 0 0);
			opacity: 1;
		}
	}

	/* 渐入渐出 */
	@keyframes FadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes FadeOut {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}

	@keyframes FadeIn_Left {
		0% {
			opacity: 0;
			margin-left: -25px;
		}
		100% {
			opacity: 1;
			margin-left: 0;
		}
	}

	@keyframes FadeOut_Left {
		0% {
			opacity: 1;
			margin-left: 0;
		}
		100% {
			opacity: 0;
			margin-left: -25px;
		}
	}

	@keyframes FadeIn_Right {
		0% {
			opacity: 0;
			margin-right: -25px;
		}
		100% {
			opacity: 1;
			margin-right: 0;
		}
	}

	@keyframes FadeOut_Right {
		0% {
			opacity: 1;
			margin-right: 0;
		}
		100% {
			opacity: 0;
			margin-right: -25px;
		}
	}

	@keyframes FadeIn_Top {
		0% {
			opacity: 0;
			margin-top: -25px;
		}
		100% {
			opacity: 1;
			margin-top: 0;
		}
	}

	@keyframes FadeOut_Top {
		0% {
			opacity: 1;
			margin-top: 0;
		}
		100% {
			opacity: 0;
			margin-top: -25px;
		}
	}

	@keyframes FadeIn_Bottom {
		0% {
			opacity: 0;
			margin-bottom: -25px;
		}
		100% {
			opacity: 1;
			margin-bottom: 0;
		}
	}

	@keyframes FadeOut_Bottom {
		0% {
			opacity: 1;
			margin-bottom: 0;
		}
		100% {
			opacity: 0;
			margin-bottom: -25px;
		}
	}

	/* 缩放渐入渐出 */
	@keyframes ScaleIn {
		0% {
			opacity: 0;
			transform: scale(0.8);
		}
		100% {
			opacity: 1;
			transform: scale(1);
		}
	}

	@keyframes ScaleOut {
		0% {
			opacity: 1;
			transform: scale(1);
		}
		100% {
			opacity: 0;
			transform: scale(0.8);
		}
	}

	/* 高度增缩 */
	@keyframes HeightIn {
		0% {
			height: 0;
		}
	}
`
