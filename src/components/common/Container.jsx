import React from 'react'

const Container = ({ parentBlockClass, children }) => {
	return <div className={[parentBlockClass, 'container'].join(' ')}>{children}</div>
}

export default Container
