import ReactDOM from 'react-dom'
import App from './App'
import { Fonts, Icons, Reset } from './styledApp'
// import './index.css'

ReactDOM.render(
	<>
		<Reset />
		<Fonts />
		<Icons />
		<App />
	</>,
	document.getElementById('root')
)
