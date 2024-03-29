import React, { useState, useEffect, useRef } from 'react'
import { FaCircle } from 'react-icons/fa'
import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'

import FollowCursor from './components/FollowerCursor'
import Header from './components/Header'
import DotText from './components/DotText'
import HorizontalText from './components/HorizontalText'
import RisingAnimationText2 from './components/RisingAnimationText2'
import RisingAnimationText3 from './components/RisingAnimationText3'
import RisingAnimationText from './components/RisingAnimationText'
import HoverEffectOnImage from './components/HoverEffectOnImage'
import RisingAnimationDiv from './components/RisingAnimationDiv'
import SmoothScroll from './components/SmoothScroll'
import DivisionLine from './components/DivisionLine'
import Landing from './components/Landing'
import { motion } from 'framer-motion'
import TweenLite, { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'

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

	const changeDarkTheme = (value: boolean) => {
		localStorage.setItem('dark', value ? '1' : '0')
		setDark(value)
	}

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
				<title>Cheshire Cat</title>
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
						<section className="sm:mb-[0px] md:mb-[150px] lg:mb-[0px] text-[50px] sm:text-[53px] md:text-[62px] lg:text-[85px] xl:text-[97px] leading-[50px] md:leading-[100px]">
							<motion.div
								ref={textOne}
								className="mt-20 sm:mt-20"
							>
								<div className="animation-mask">
									<motion.p
										variants={animation}
										className="animation-text1 text-center w-full"
									>
										The State Council has
									</motion.p>
								</div>
								<div className="animation-mask">
										<motion.p
										variants={animation}
										className="animation-text1 text-center w-full"
									>
										 initiated the Dictionary 
									</motion.p>
								</div>
								<div className="animation-mask">
										<motion.p
										variants={animation}
										className="animation-text1 text-center w-full"
									>
										 Revision Process
									</motion.p>
								</div>

								<div className='text-14 w-full sm:w-[70px] mx-auto'>
									<span>by Amy</span>
								</div>

								<div className="text-14 w-full sm:w-[500px] mx-auto mt-10 sm:mt-20">
									<DotText
										scrollAnimation={true}
										text={
											'Huaxian News Agency, January 13. The General Office of the State Council released the announcement of the initiation of Dictionary revision, aiming to protect citizens’ freedom of speech.'
										}
									/>
								</div>
							</motion.div>
						</section>

						<div className="mt-14">
							<DivisionLine color={'#FF5C00'} />
						</div>

						{/* a paragraph of centered text */}
						<section className="mt-16 sm:mt-20">
							<p>In line with the concern for the freedom of speech and convenience of citizens’ daily communication, as well as the usage of accurate and standardized written language, the State Council announced the official launch of the Dictionary’s revision process in the previous meeting. A few amendments are made, after throughout consideration by authoritative scholars, on the lexical expression, and are expected to be strictly applied in future oral and written expressions.</p>
							<br />
							<p>The main amendments are the following:</p>

							{/* a table of two columns */}
							<table className="table-auto w-full sm:w-[500px] mx-auto mt-8 sm:mt-18 mb-8 sm:mb-8">
								<tr>
									<th>Origin Lexion</th>
									<th>After Modification</th>
								</tr>
								<tr>
									<td>
										Government
									</td>
									<td>
										The Agency of Virtue and Morality
									</td>
								</tr>
								<tr>
									<td>
										Government official
									</td>
									<td>
										Rights Defender
									</td>
								</tr>
								<tr>
									<td>
										Military
									</td>
									<td>
										The Agency of Peace
									</td>
								</tr>
								<tr>
									<td>
										Soldier
									</td>
									<td>
										Peace Defender
									</td>
								</tr>
								<tr>
									<td>
										President
									</td>
									<td>
										The Supreme
									</td>
								</tr>
								<tr>
									<td>
										Politics
									</td>
									<td>
										The Doctrines of Virtue
									</td>
								</tr>
								<tr>
									<td>
										Democracy
									</td>
									<td>
										The System of Chaos
									</td>
								</tr>
								<tr>
									<td>
										Communism
									</td>
									<td>
										The System of Glory
									</td>
								</tr>
								<tr>
									<td>
										Independent
									</td>
									<td>
										Seditious
									</td>
								</tr>
								<tr>
									<td>
										Protest
									</td>
									<td>
										Prolidetariamitalhulyt
									</td>
								</tr>
								<tr>
									<td>
										Violate
									</td>
									<td>
										Vilishimituvxihuralito
									</td>
								</tr>
								<tr>
									<td>
										Sedition
									</td>
									<td>
										Sisdgiojadsdiofhgo
									</td>
								</tr>
								<tr>
									<td>
										Rebellion
									</td>
									<td>
										Risoidjfgjioaiusdfion
									</td>
								</tr>
							</table>
							<p>
								The sole purpose of the amendments is to protect the freedom of speech and to standardize spoken and written languages. After adequate evaluation, the positive effect of the following amendments is verified and is proven to meet citizens’ expectations of a more open and modern life.  
							</p>
							<br />
							<p>
								It should be noted that the origin lexicons must be modified in any texts or oral speech records, and misuse of word choice will be convicted of endangering public safety, which would face up to 15 years of sentence. We encourage every citizen to participate in whistleblowing of inappropriate use of words, and each report on misuse will receive a verbal reward from The Agency of Virtue and Morality. 
							</p>
							<br />
							<p>
								Every citizen is expected to respond actively to the Dictionary’s revision and its corresponding regulations, and build a society of love, care, and harmony together.  
							</p>
						</section>

						<section id="footer">
							<section className="mt-[110px] md:mt-[250px]  mb-[110px]">
								<RisingAnimationText3 isDark={isDark} />
								<div className="h-10 md:hidden" />
								<div className="w-full flex justify-end md:mt-4">
									<div className="hidden md:block text-16 w-[400px] mr-[150px]">
										<DotText
											scrollAnimation={true}
											leftalign={false}
											text="do you want to talk to your pillows about your dangerous thoughts, argue with your pet tiger and die, or... write them out with us?"
										/>
									</div>
									<div className="text-14 w-full px-8 md:hidden">
										<DotText
											scrollAnimation={true}
											leftalign={false}
											text="do you want to talk to your pillows about your dangerous thoughts, argue with your pet tiger and die, or... write them out with us?"
										/>
									</div>
								</div>
							</section>

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
										<img
											src="img/maskLeft.png"
											style={{
												height: '100%',
												display: isDark
													? 'block'
													: 'none',
											}}
											className="absolute top-0 left-[0px] z-10 pointer-events-none"
										/>
										<img
											src="img/maskleftlight.png"
											style={{
												height: '100%',
												display: isDark
													? 'none'
													: 'block',
											}}
											className="absolute top-0 left-[0px] z-10 pointer-events-none"
										/>
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
										<img
											src="img/maskRight.png"
											style={{
												height: '100%',
												display: isDark
													? 'block'
													: 'none',
											}}
											className="absolute top-0 right-[0px] z-10 pointer-events-none"
										/>
										<img
											src="img/maskrightlight.png"
											style={{
												height: '100%',
												display: isDark
													? 'none'
													: 'block',
											}}
											className="absolute top-0 right-[0px] z-10 pointer-events-none"
										/>
									</div>
									<p className="text-14 ml-12 hidden md:block ">
										CHESHIRE CAT
										<br />
										CHESHIRE CAT
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
								className="flex justify-center items-center -mx-16 pt-[100px] h-[120px] md:h-[120px] overflow-hidden"
							>
								<p
									ref={footer}
									style={{ transform: 'translate(0,200px)' }}
									className="text-[180px] md:text-[240px] font-bold text-center mt-4"
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
