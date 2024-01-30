import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import HomePage from "./pages/HomePage/HomePage"
import AboutPage from "./pages/AboutPage/AboutPage"
import BreadCrumbs from './components/BreadCrumbs/BreadCrumbs'
import GalleryPage from "./pages/GalleryPage/GalleryPage"
import ContactsPage from "./pages/ContactsPage/ContactsPage"
import BlogPage from "./pages/BlogPage/BlogPage"

const App = () => {
	return (
		<div className="wrapper">
			<Header />
			<main className="main">
				<BreadCrumbs />

				{/* <HomePage /> */}
				{/* <AboutPage /> */}
				{/* <GalleryPage /> */}
				{/* <ContactsPage /> */}
				<BlogPage />
			</main>
			<Footer />
		</div>
	)
}

export default App