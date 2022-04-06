import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'

const RisingAnimationDiv = (props: any) => {
	const risingDivRef = useRef<HTMLHeadingElement>(null)
	const [animation, setanimation] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (!animation) {
				const clientHeight = document.documentElement.clientHeight
				if (risingDivRef.current) {
					const dotTextSectionY =
						risingDivRef.current.getBoundingClientRect().y
					const dotTextSectionheight =
						risingDivRef.current.getBoundingClientRect().height

					if (
						clientHeight >
						dotTextSectionY + (dotTextSectionheight * 2) / 4
					) {
						gsap.to(risingDivRef.current, 0.5, {
							y: 0,
							opacity: 1.0,
						})
						setanimation(true)
					}
				}
			}
		})
	}, [])

	const risingAnimation = {
		exit: {
			y: 150,
			opacity: 0,
			transition: {
				duration: 0.5,
				ease: [0.19, 1, 0.22, 1],
			},
		},
	}

	return (
		<motion.div
			exit="exit"
			variants={risingAnimation}
			style={{ opacity: 0, transform: 'translate(0,150px)' }}
			className={props.classes}
			ref={risingDivRef}
		>
			{props.children}
		</motion.div>
	)
}

export default RisingAnimationDiv
