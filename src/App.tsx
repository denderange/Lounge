import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import HomePage from "./pages/HomePage/HomePage"

const App = () => {
	return (
		<div className="wrapper">
			<Header />
			<main className="main">
				<HomePage />
			</main>
			<Footer />
		</div>
	)
}

export default App