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
