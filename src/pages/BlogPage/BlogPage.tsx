import { lazy, Suspense, useState } from 'react'
import BlogAside from './BlogAside'
import './blogPage.scss'
import LoaderSpinner from '../../components/LoaderSpinner/LoaderSpinner'
import useTitle from '../../hooks/useTitle'
const BlogItem = lazy(() => import('./BlogItem'))
const BlogLine = lazy(() => import('./BlogLine'))

const BlogPage = () => {
	const [showBlogItem, setShowBlogItem] = useState(true)

	const renderBlogLine = () => {
		return (
			<Suspense fallback={<LoaderSpinner />}>
				<BlogLine />
			</Suspense>
		)
	}

	const renderBlogItem = () => {
		return (
			<Suspense fallback={<LoaderSpinner />}>
				<BlogItem />
			</Suspense>
		)
	}

	useTitle("blog posts")

	return (
		<section className="blog">
			<div className="container">
				<div className="blog__inner">

					<div className="blog__items">
						{showBlogItem ? renderBlogItem() : renderBlogLine()}
					</div>

					<aside className="aside">
						<BlogAside />
					</aside>

				</div>
			</div>
		</section>
	)
}

export default BlogPage