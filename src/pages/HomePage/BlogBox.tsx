import './homePage.scss'
import imgB1 from '../../assets/images/bp1.webp'
import imgB2 from '../../assets/images/bp2.webp'

const BlogBox = () => {
	return (
		<section className="blog-box">
			<div className="container">
				<h3 className="blog-box__title">
					Больше вдохновляющих идей в наших соцсетях
				</h3>
				<div className="blog-box__items">
					<div className="blog-box__item">
						<a className="blog-box__item-link" href="#!">
							<img className="blog-box__img" src={imgB1} alt="" />
						</a>
					</div>
					<div className="blog-box__item">
						<a className="blog-box__item-link" href="#!">
							<img className="blog-box__img" src={imgB2} alt="" />
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BlogBox