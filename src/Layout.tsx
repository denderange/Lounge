import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
// import BreadCrumbs from './components/BreadCrumbs/BreadCrumbs'
import LoaderSpinner from './components/LoaderSpinner/LoaderSpinner'

const Layout = () => {
	return (
		<div className="wrapper">
			<Header />
			<main className="main">
				<Suspense fallback={<LoaderSpinner />}>
					<Outlet />
				</Suspense>
			</main>
			<Footer />
		</div>
	)
}

export default Layout