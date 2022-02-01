import React from 'react'
import Body from './common/Body'
import Container from './common/Container'
import Form from './Form'

const Main = () => {
	return (
		<main className="main">
			<Container parentBlockClass={'main__container'}>
				<Body parentBlockClass={'main__body'}>
					<Form parentBlockClass={'main__form'} />
				</Body>
			</Container>
		</main>
	)
}

export default Main
