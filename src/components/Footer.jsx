import React from 'react'
import Body from './common/Body'

const Footer = ({ parentBlockClass, handleClick }) => {
	return (
		<footer className={[parentBlockClass, 'footer'].join(' ')} id='footer'>
			<Body parentBlockClass={'footer__body'}>
				<form className="footer__form" onClick={handleClick}>
					<button className="footer__btn footer__btn--completed" data-btn="completed">do everything</button>
					<button className="footer__btn footer__btn--important" data-btn="important">mark all as important</button>
					<button className="footer__btn footer__btn--delete" data-btn="delete">delete everything</button>
				</form>
			</Body>
		</footer>
	)
}

export default Footer
