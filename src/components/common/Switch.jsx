import React from 'react'

const Switch = ({ parentBlockClass, handleClick }) => {
	return (
		<div className={[parentBlockClass, 'switch'].join(' ')} onClick={handleClick}>
			<div className="switch__track">
				<div className="switch__thumb"></div>
			</div>
		</div>
	)
}

export default Switch
