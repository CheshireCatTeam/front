import React, { useState, useEffect, useRef } from 'react'
import type { NextPage } from 'next'
// import Link from 'next/link'
import Head from 'next/head'
import { FaCircle } from 'react-icons/fa'

import FollowCursor from './components/FollowerCursor'
import Header from './components/Header'
import RisingAnimationText from './components/RisingAnimationText'
import SmoothScroll from './components/SmoothScroll'
import Landing from './components/Landing'
import SocialBar from './components/SocialBar'

import { motion } from 'framer-motion'
import { CustomEase } from 'gsap/CustomEase'
import { gsap } from 'gsap'
gsap.registerPlugin(CustomEase)
const color1 = '#C8A2C8'
const color2 = '#e9d5da'

const Home: NextPage = () => {
	const [isDark, setDark] = useState(true)
	const swiperImages = useRef<HTMLHeadingElement>(null)
	const textOne = useRef<HTMLHeadingElement>(null)
	const buttonOne = useRef<HTMLButtonElement>(null)
	const footer = useRef<HTMLHeadingElement>(null)
	const letswork = useRef<HTMLHeadingElement>(null)

	function AnimationText() {
		CustomEase.create('cubic-bezier', '.19,1,.22,1')
		gsap.to(swiperImages.current, 1, {
			y: 0,
			opacity: 1,
			ease: 'cubic-bezier',
			delay: 3.1,
		})

		let animations = document.getElementsByClassName('animation-text1')

		if (animations.length > 0) {
			for (let i = 0; i < animations.length; i++) {
				let animation = animations[i]
				gsap.to(animation, 1, {
					top: 0,
					ease: 'cubic-bezier',
					delay: 2.5 + i / 4,
				})
			}
		}
	}

	const changeDarkTheme = (value: boolean) => {
		localStorage.setItem('dark', value ? '1' : '0')
		setDark(value)
	}

	useEffect(() => {
		if (typeof window !== 'undefined') {
			AnimationText()
		}

		window.addEventListener('scroll', () => {
			const clientHeight = document.documentElement.clientHeight
			CustomEase.create('cubic-bezier', '.19,1,.22,1')
			if (buttonOne.current) {
				const buttonOneSectionY =
					buttonOne.current.getBoundingClientRect().y
				const buttonOneSectionheight =
					buttonOne.current.getBoundingClientRect().height

				if (
					clientHeight >
					buttonOneSectionY + (buttonOneSectionheight * 2) / 3
				) {
					gsap.to(buttonOne.current, 1, {
						opacity: 1,
						y: 0,
						ease: 'cubic-bezier',
					})
				}
			}

			if (footer.current) {
				const footerSectionY = footer.current.getBoundingClientRect().y
				const footerSectionheight =
					footer.current.getBoundingClientRect().height
				if (
					clientHeight >
					footerSectionY - (footerSectionheight * 2) / 3
				) {
					gsap.to(footer.current, 1, {
						y: 0,
						ease: 'cubic-bezier',
						delay: 1,
					})
				}
			}

			if (letswork.current) {
				const letsworkSectionY =
					letswork.current.getBoundingClientRect().y
				const letsworkSectionheight =
					letswork.current.getBoundingClientRect().height
				if (
					clientHeight >
					letsworkSectionY + (letsworkSectionheight * 2) / 3
				) {
					// gsap.to(letswork.current, 1, {opacity: 1, y: 0, ease: 'cubic-bezier', delay:0.5 })
					if (letswork.current.children.length > 0) {
						for (
							let i = 0;
							i < letswork.current.children.length;
							i++
						) {
							let animation = letswork.current.children[i]
							gsap.to(animation, 1, {
								opacity: 1,
								y: 0,
								ease: 'cubic-bezier',
								delay: 0.5 + i / 4,
							})
						}
					}
				}
			}
		})

		var studioDark = localStorage.getItem('dark')
		if (studioDark === null) {
			localStorage.setItem('dark', '1')
		} else {
			setDark(studioDark === '1')
		}
	}, [])

	const buttonOverIn = () => {
		let cursor = document.getElementById('cursor')
		gsap.to(cursor, { scale: 3, opacity: 0.3 })
	}

	const buttonOverOut = () => {
		let cursor = document.getElementById('cursor')
		gsap.to(cursor, { scale: 1, opacity: 1 })
	}

	const allow = (
		<svg
			width="30"
			height="15"
			viewBox="0 0 30 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="1"
				y="1"
				width="28"
				height="13"
				rx="6.5"
				fill={isDark ? '#FF5C00' : '#001AFF'}
				stroke={isDark ? '#FF5C00' : '#001AFF'}
				strokeWidth="2"
			/>
			<path
				className="arrow"
				fillRule="evenodd"
				clipRule="evenodd"
				d="M6.32812 7.96875V7.03125L23.2031 7.03125V7.96875L6.32812 7.96875Z"
				fill="white"
			/>
			<rect
				className="arrow"
				width="5.625"
				height="0.9375"
				transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 20.1172 11.4844)"
				fill="white"
			/>
			<rect
				className="arrow"
				width="5.625"
				height="0.9375"
				transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 24.0938 7.49316)"
				fill="white"
			/>
		</svg>
	)

	const animation = {
		exit: {
			y: 250,
			transition: {
				duration: 1,
				ease: [0.19, 1, 0.22, 1],
			},
		},
		exitTwo: {
			y: 250,
			opacity: 0,
			transition: {
				duration: 1,
				ease: [0.19, 1, 0.22, 1],
			},
		},
	}
	return (
		<>
			<Head>
				<title>CheshireCat/Contact</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Landing />
			<SmoothScroll
				bkgroundColor={isDark ? color1 : color2}
				foreColor={isDark ? color2 : color1}
			>
				<div className="main-wrapper">
					<Header />

					<motion.div exit="exit" className="content">
						<section className="title-text sm:mb-[0px] md:mb-[150px] lg:mb-[0px] sm:text-[53px] md:text-[62px] lg:text-[85px] xl:text-[97px] leading-[50px] md:leading-[100px] text-center w-[1100px] mx-auto">
							<motion.div ref={textOne} className="title1 mt-20">
								<div className="relative overflow-hidden h-[100px]">
									<motion.p
										variants={animation}
										className="animation-text1"
									>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Say hello
										to
									</motion.p>
								</div>
								<div className="relative overflow-hidden h-[100px]">
									<motion.p
										variants={animation}
										className="animation-text1 flex"
									>
										Cheshire&copy;
										<div className="w-[500px] ml-28 mt-[40px] text-[14px] flex items-start leading-[15px]">
											<FaCircle />
											Bonjour
											Dia dhuit
											Hi
											Guten Tag
											Yasou
											Hola
										</div>
									</motion.p>
								</div>
								<div className="relative overflow-hidden h-[100px]">
									<motion.p
										variants={animation}
										className="animation-text1"
									>
										shuoshuofeng@live.com
									</motion.p>
								</div>
							</motion.div>

							<div className="title1-mobile mt-10 text-left leading-[40px]">
								<div className="animation-mask -mb-6">
									<motion.p
										variants={animation}
										className="animation-text1 text-[30px] leading-8"
									>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Say
										hello to
									</motion.p>
								</div>
								<div className="animation-mask -mb-6">
									<motion.p
										variants={animation}
										className="animation-text1 text-[30px] leading-8"
									>
										CHESHIRE CAT
									</motion.p>
								</div>
								<div className="animation-mask -mb-6">
									<motion.p
										variants={animation}
										className="animation-text1 text-[30px] leading-8"
									>
										shuoshuofeng@live.com{' '}
									</motion.p>
								</div>

								<div className="animation-mask mt-8">
									<motion.div
										variants={animation}
										className="animation-text1"
									>
										<div className="text-[12px] flex items-start leading-[14px]">
											<FaCircle />
											<div className="ml-2 w-[300px]">
										BONJOUR DIA DHUIT HI GUTEN TAG YASOU HOLA
											</div>
										</div>
									</motion.div>
								</div>
							</div>
						</section>

						<section className="mt-16 sm:mt-20 mb-10 sm:mb-20 w-[2000px] -ml-[300px]">
							<SocialBar />
						</section>

						<section className="mt-20 sm:mt-20 mb-20">
							<RisingAnimationText animateName="contact-text-animate1">
								<div className=" relative overflow-hidden h-[40px] sm:h-[90px]">
									<motion.p
										variants={animation}
										className="contact-text-animate1 absolute top-[100px] left-0 text-[35px] sm:text-[76px] font-normal"
									>
										Get Connected
									</motion.p>
								</div>

								<div className="mt-16 sm:mt-36 sm:flex sm:pl-[40%] font-normal">
									<div className="w-[300px]">
										<div className=" relative overflow-hidden h-[20px]">
											<motion.p
												variants={animation}
												className="contact-text-animate1 absolute top-[100px] text-[14px] left-0"
											>
												(86) 173 0627 6989
											</motion.p>
										</div>
										<div className=" relative overflow-hidden h-[20px]">
											<motion.p
												variants={animation}
												className="contact-text-animate1 absolute top-[100px] text-[14px] left-0"
											>
												shuoshuofeng@live.com
											</motion.p>
										</div>
									</div>
								</div>
							</RisingAnimationText>
						</section>

						<section id="footer">
							<motion.section
								variants={animation}
								exit="exitTwo"
								ref={letswork}
								className="md:flex justify-between items-center"
							>
								<div
									style={{
										opacity: 0,
										transform: 'translate(0,200px)',
									}}
									className="flex items-center justify-center md:justify-start"
								>
									<div className="text-white flex justify-center items-center relative mx-4 md:ml-16">
										<button
											className={
												isDark
													? 'animation-button mx-[1px]'
													: 'animation-button blue-button mx-[1px]'
											}
											onClick={() =>
												changeDarkTheme(!isDark)
											}
											style={{
												border: isDark
													? 'solid 3px #FF5C00'
													: 'solid 3px #0019FF',
											}}
											onMouseMove={buttonOverIn}
											onMouseLeave={buttonOverOut}
										>
											<div
												className="btn-content"
												style={{
													height: '56px !important',
													color: isDark
														? 'white'
														: 'black',
												}}
											>
												<div className="btn-content-group mx-4 text-[32px]">
													Dark/Light
												</div>
											</div>
										</button>
									</div>
									<p className="text-14 ml-12 hidden md:block ">
										CHESHIRECAT
									</p>
								</div>
								<p
									style={{
										opacity: 0,
										transform: 'translate(0,200px)',
									}}
									className="text-14 text-center mt-4 md:hidden pr-16"
								>
									CHESHIRE CAT
									<br />
									CHESHIRE CAT&nbsp;&nbsp;&nbsp;
								</p>
								<div className="h-[75px] md:hidden" />
								<p
									style={{
										opacity: 0,
										transform: 'translate(0,200px)',
									}}
									className="text-14 md:ml-6 text-center md:text-left"
								>
									2022 Cheshire Cat
								</p>
							</motion.section>

							<motion.section
								variants={animation}
								exit="exit"
								className="flex justify-center items-center mt-4 -mx-16 pt-[100px] h-[120px] md:h-[120px] overflow-hidden"
							>
								<p
									ref={footer}
									style={{ transform: 'translate(0,200px)' }}
									className="text-[180px] md:text-[240px] font-bold text-center"
								>
									CHESHIRE CAT
								</p>
							</motion.section>
						</section>
					</motion.div>
				</div>
			</SmoothScroll>

			<div className="hidden md:block">
				<FollowCursor />
			</div>
		</>
	)
}
export default Home
