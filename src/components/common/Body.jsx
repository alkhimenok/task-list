import React from 'react'

const Body = ({ parentBlockClass, children }) => {
	return <div className={[parentBlockClass, 'body'].join(' ')}>{children}</div>
}

export default Body
