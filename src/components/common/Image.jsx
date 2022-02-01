import React from 'react'

const Image = ({ parentBlockClass, src = '', alt = 'image' }) => {
	return <img className={[parentBlockClass, 'img'].join(' ')} src={require('../../assets/images/' + src)} alt={alt} />
}

export default Image
