import { lazy } from 'react'
import Layout from './Layout'
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"))
const GalleryPage = lazy(() => import("./pages/GalleryPage/GalleryPage"))
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"))
const BlogPage = lazy(() => import("./pages/BlogPage/BlogPage"))
import { Routes, Route } from "react-router-dom"
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index path='/' element={<HomePage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/gallery' element={<GalleryPage />} />
				<Route path='/contacts' element={<ContactsPage />} />
				<Route path='/blog' element={<BlogPage />} />
			</Route>

			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	)
}

export default App