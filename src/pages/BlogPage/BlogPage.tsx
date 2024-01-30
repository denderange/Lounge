import BlogAside from './BlogAside'
import BlogContent from './BlogContent'
import './blogPage.scss'


const BlogPage = () => {


	return (
		<section className="blog">
			<div className="container">
				<div className="blog__inner">

					<div className="blog__items">
						<BlogContent />
					</div>
					<BlogAside />
				</div>
			</div>
		</section>
	)
}

export default BlogPage