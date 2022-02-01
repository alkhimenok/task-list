import React, { useState } from 'react'
import Container from './common/Container'
import Body from './common/Body'
import Image from './common/Image'
import Switch from './common/Switch'

const Header = () => {
	const [switchClassName, setSwitchClassName] = useState('header__switch')
	const backgroundSrcList = ['backgrounds/1.jpg', 'backgrounds/2.jpg', 'backgrounds/3.jpg', 'backgrounds/4.jpg']

	const handleSwitchClick = () => {
		setSwitchClassName(prev => (prev.includes('switch--active') ? 'header__switch' : 'header__switch switch--active'))
	}

	return (
		<header className="header">
			<div className="header__background">
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
