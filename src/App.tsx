import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import HomePage from "./pages/HomePage/HomePage"
import AboutPage from "./pages/AboutPage/AboutPage"
import BreadCrumbs from './components/BreadCrumbs/BreadCrumbs'

const App = () => {
	return (
		<div className="wrapper">
			<Header />
			<main className="main">
				<BreadCrumbs />

				{/* <HomePage /> */}
				<AboutPage />
			</main>
			<Footer />
		</div>
	)
}

export default App