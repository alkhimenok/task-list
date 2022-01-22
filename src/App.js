import Select from './components/Select/Select'
import Form from './components/Form/Form'

const App = () => {
	return (
		<div className="wrapper">
			<header className="header">
				<div className="header__container --container">
					<div className="header__body --body">
						<h1 className="header__logo">Task list</h1>
						<Select blockClass={'header__select'} />
					</div>
				</div>
			</header>
			<main className="main">
				<div className="main__container --container">
					<div className="main__body --body"></div>
						<Form blockClass={'main__form'} />
				</div>
			</main>
		</div>
	)
}

export default App
