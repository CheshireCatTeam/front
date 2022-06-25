import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'
const RisingAnimationText2 = () => {
	const classesName1 = 'text-justify opacity-0'
	const classesName2 = 'text-justify animation-text2 opacity-0'
	const risingRef1 = useRef<HTMLHeadingElement>(null)
	const [animation, setanimation] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (!animation) {
				const clientHeight = document.documentElement.clientHeight
				if (risingRef1.current) {
					const dotTextSectionY =
						risingRef1.current.getBoundingClientRect().y
					const dotTextSectionheight =
						risingRef1.current.getBoundingClientRect().height

					if (
						clientHeight >
						dotTextSectionY + (dotTextSectionheight * 2) / 3
					) {
						let animations =
							document.getElementsByClassName('animation-text2')

						if (animations.length > 0) {
							for (let i = 0; i < animations.length; i++) {
								let animation = animations[i]
								gsap.to(animation, 1.5, {
									top: 0,
									ease: 'expo',
								})
							}
							setanimation(true)
						}
					}
				}
			}
		})
	}, [animation])

	const FadeOutAnimation = {
		exit: {
			y: 100,
			opacity: 0,
			transition: {
				duration: 0.5,
				ease: [0.19, 1, 0.22, 1],
			},
		},
	}

	return (
		<motion.div exit="exit" ref={risingRef1}>
			<div className="hidden md:block xl:text-[76px] lg:text-[60px] md:text-[44px] leading-[86px]">
				<div className="animation-mask2">
					<motion.div
						variants={FadeOutAnimation}
						className="animation-text2 strechText"
					>
						<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
						<div>this&nbsp;</div>
						<div>is&nbsp;</div>
						<div>the&nbsp;</div>
						<div>place&nbsp;</div>
						<div>for&nbsp;</div>
						<div>satires</div>
					</motion.div>
				</div>
				<div className="animation-mask2">
					<motion.div
						variants={FadeOutAnimation}
						className="animation-text2 strechText"
					>
						<div>about&nbsp;</div>
						<div>sensitive&nbsp;</div>
						<div>topics&nbsp;</div>
						<div>that you</div>
					</motion.div>
				</div>
				<div className="animation-mask2">
					<motion.div
						variants={FadeOutAnimation}
						className="animation-text2 strechText"
					>
						<div>can't or&nbsp;</div>
						<div>don't want&nbsp;</div>
						<div>to criticise</div>
					</motion.div>
				</div>
				<div className="animation-mask2">
					<motion.div
						variants={FadeOutAnimation}
						className="animation-text2 strechText justify-start"
					>
						<div>directly &</div>
						<div>&nbsp;&nbsp;explicitly.</div>
					</motion.div>
				</div>
			</div>
		</motion.div>
	)
}

export default RisingAnimationText2
