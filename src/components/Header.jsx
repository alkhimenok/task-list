import React, { useState, useEffect, useMemo } from 'react'
import Container from './common/Container'
import Body from './common/Body'
import Image from './common/Image'
import Switch from './common/Switch'
import { changeAppThem } from '../scripts/them'

const Header = () => {
	const [switchClassName, setSwitchClassName] = useState('header__switch')
	const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0)

	const backgroundSrcList = useMemo(() => ['backgrounds/1.jpg', 'backgrounds/2.jpg', 'backgrounds/3.jpg'], [])

	const handleSwitchClick = () => {
		setSwitchClassName(prev => {
			let themName
			let switchState

			if (prev.includes('switch--active')) {
				themName = 'white'
				switchState = 'header__switch'
			} else {
				themName = 'black'
				switchState = 'header__switch switch--active'
			}

			changeAppThem(themName)
			return switchState
		})
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
	}, [backgroundSrcList])

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
