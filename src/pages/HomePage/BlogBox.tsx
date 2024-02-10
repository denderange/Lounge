import './homePage.scss'
import imgB1 from '../../assets/images/bp1.webp'
import imgB2 from '../../assets/images/bp2.webp'
import { getRandomDate } from '../../utils/getRandomDate'
import useMediaQuery from '../../hooks/useMediaQuery'

const BlogBox = () => {
	const showDevider = useMediaQuery('(min-width: 971px)')

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
						<div className="blog-box__links">
							<span className="blog-box__date">
								{
									getRandomDate(new Date(2023, 0, 1), new Date())
										.toLocaleString('default', { month: 'long' })
								}
								{" "}
								{getRandomDate(new Date(2023, 0, 1), new Date()).getDate()}
								,{" "}
								2023
							</span>{showDevider && " | "}
							<a className="blog-box__author" href="#!">Анатолий Фронтендов</a>{showDevider && " | "}
							<a className="blog-box__theme" href="#!">Интерьер</a>
						</div>
						<a className="blog-box__item-title-link" href="#!">
							<h4 className="blog-box__item-title">
								Мы также предлагаем услуги по доставке и монтажу мебели
							</h4>
						</a>
					</div>
					<div className="blog-box__item">
						<a className="blog-box__item-link" href="#!">
							<img className="blog-box__img" src={imgB2} alt="" />
						</a>
						<div className="blog-box__links">
							<span className="blog-box__date">
								{
									getRandomDate(new Date(2023, 0, 1), new Date())
										.toLocaleString('default', { month: 'long' })
								}
								{" "}
								{getRandomDate(new Date(2023, 0, 1), new Date()).getDate()}
								,{" "}
								2023
							</span>{showDevider && " | "}
							<a className="blog-box__author" href="#!">Эльвира Тайпскриптова</a>{showDevider && " | "}
							<a className="blog-box__theme" href="#!">Дизайн кухни</a>
						</div>
						<a className="blog-box__item-title-link" href="#!">
							<h4 className="blog-box__item-title">
								Мебель всегда будет являться ключевым элементом вашего дома
							</h4>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BlogBox