import React from 'react'
import Body from './common/Body'
import Container from './common/Container'

const Footer = () => {
	return (
		<footer className="footer">
			<Container parentBlockClass={'footer__container'}>
				<Body parentBlockClass={'footer__body'}>
					<form className="footer__form">
						<button className="footer__btn footer__btn--completed">do everything</button>
						<button className="footer__btn footer__btn--important">mark all as important</button>
						<button className="footer__btn footer__btn--delete">delete everything</button>
					</form>
				</Body>
			</Container>
		</footer>
	)
}

export default Footer
