import React, { useState, useEffect } from 'react'
import Container from './common/Container'
import Body from './common/Body'
import Image from './common/Image'
import Switch from './common/Switch'

const Header = () => {
	const [switchClassName, setSwitchClassName] = useState('header__switch')
	const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0)

	const backgroundSrcList = ['backgrounds/1.jpg', 'backgrounds/2.jpg', 'backgrounds/3.jpg']

	const handleSwitchClick = () => {
		setSwitchClassName(prev => (prev.includes('switch--active') ? 'header__switch' : 'header__switch switch--active'))
	}

	useEffect(() => {
		let isNext = true

		setInterval(() => {
			setCurrentBackgroundIndex(prev => {
				if (prev === backgroundSrcList.length - 1) isNext = false
				if (prev === 0) isNext = true

				return isNext ? prev + 1 : prev - 1
			})
		}, 10000)
	}, [])

	return (
		<header className="header">
			<div className="header__background" style={{ transform: `translate(${-100 * currentBackgroundIndex}%, 0)` }}>
				{backgroundSrcList.map((src, i) => (
					<Image parentBlockClass={'header__img'} src={src} alt={'background'} key={i} />
				))}
			</div>
			<Container parentBlockClass={'header__container'}>
				<Body parentBlockClass={'header__body'}>
					<h1 className="header__title">task</h1>
					<Switch parentBlockClass={switchClassName} handleClick={handleSwitchClick} />
				</Body>
			</Container>
		</header>
	)
}

export default Header
