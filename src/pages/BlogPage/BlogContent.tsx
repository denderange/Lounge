import './blogPage.scss'
import { getRandomDate } from '../../utils/getRandomDate';
import bglogImg1 from '../../assets/images/gallery/5-5.webp'
import bglogImg2 from '../../assets/images/gallery/4-5.webp'
import sliderImg1 from '../../assets/images/gallery/3-5.webp'
import sliderImg2 from '../../assets/images/gallery/3-4.webp'
import sliderImg3 from '../../assets/images/gallery/3-3.webp'
import PopupAbout from '../../components/PopupAbout/PopupAbout';
import { IoIosPlayCircle, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const blogArticles = [
	{
		title: "Современный рынок домашней мебели предлагает огромный выбор различных моделей и стилей",
		theme: "Проектирование и разработка дизайна",
		text: "Существует огромное разнообразие домашней мебели: кровати, шкафы, комоды, столы, стулья, диваны и многое другое. Каждый предмет мебели должен соответствовать определенным требованиям, таким как удобство, функциональность, качество материалов и дизайн."
	}
]

const BlogContent = () => {
	const randomDate = () => {
		return Math.floor(1 + Math.random() * 30)
	}

	const sliderSettings = {
		prevArrow: (
			<button type="button">
				<IoIosArrowBack />
			</button>
		),
		nextArrow: (
			<button type="button">
				<IoIosArrowForward />
			</button>
		)
	};

	const renderArticle = () => (
		<div className="blog__item">
			<img className="blog__item-img" src={bglogImg1} alt="" />
			<div className="blog__item-info">
				<span className="blog__item-date">
					{getRandomDate(new Date(2023, 0, 1), new Date())
						.toLocaleString('default', { month: 'long' })}{" "}
					{randomDate()},{" "}2023
				</span>{" | "}
				<a className="blog__item-author" href="#!">
					Зинаида Заверстальченко
				</a>{" | "}
				<a className="blog__item-theme" href="#!">
					{blogArticles[0].theme}
				</a>
			</div>
			<h3 className="blog__item-title">
				{blogArticles[0].title}
			</h3>
			<p className="blog__item-text">
				{blogArticles[0].text}
			</p>
		</div>
	)
	return (
		<>
			{renderArticle()}

			<blockquote className="blog__blockquote">
				"Для изготовления мебели используются различные материалы: дерево, стекло, металл, ткани, кожа и другие."
				<div className="blog__blockquote-author">
					Артемий Облебедев
				</div>
			</blockquote>

			<div className="blog__item article-popup">
				<div className="article-popup__box">
					<PopupAbout>
						<img className="blog__item-img" src={bglogImg2} alt="" />
						<a
							className="blog__item-popup"
							data-fancybox
							href="https://youtu.be/l7O49lYbI8Q?si=Ps7bt5xIhsfgPkgE"
						>
							<IoIosPlayCircle size={80} />
						</a>
					</PopupAbout>
				</div>

				<div className="blog__item-info">
					<span className="blog__item-date">
						{getRandomDate(new Date(2023, 0, 1), new Date())
							.toLocaleString('default', { month: 'long' })}{" "}
						{randomDate()},{" "}2023
					</span>{" | "}
					<a className="blog__item-author" href="#!">
						Петр Заверстальченко
					</a>{" | "}
					<a className="blog__item-theme" href="#!">
						Сборка мебели
					</a>
					<h3 className="blog__item-title">
						После выбора материалов происходит их раскрой на нужные размеры и формы
					</h3>
				</div>

				<div className="blog__item article-slider">
					<div className="article-slider__box">
						<Slider {...sliderSettings}>
							<img className="article-slider__img" src={sliderImg1} alt="slider image" />
							<img className="article-slider__img" src={sliderImg2} alt="slider image" />
							<img className="article-slider__img" src={sliderImg3} alt="slider image" />
						</Slider>
					</div>

					<div className="blog__item-info">
						<span className="blog__item-date">
							{getRandomDate(new Date(2023, 0, 1), new Date())
								.toLocaleString('default', { month: 'long' })}{" "}
							{randomDate()},{" "}2023
						</span>{" | "}
						<a className="blog__item-author" href="#!">
							Николай Сухоруков
						</a>{" | "}
						<a className="blog__item-theme" href="#!">
							Обработка материалов
						</a>
					</div>
					<h3 className="blog__item-title">
						Шлифовка, окраска, лакирование, покрытие кожей или тканью.
					</h3>
					<p className="blog__item-text">
						Производство мебели является важным сектором экономики, который создает рабочие места и способствует развитию других отраслей промышленности. Кроме того, производство мебели способствует повышению качества жизни людей, обеспечивая им комфортную обстановку в доме и на работе.
					</p>
				</div>

				<div className="pagination">
					<a className="pagination__arrow pagination__arrow--disabled" href="#!">
						<IoIosArrowBack className="pagination__arrow-icon" />
					</a>

					<ul className="pagination__list">
						<li className="pagination__list-item ">
							<a className="pagination__list-num pagination__list-num--active" href="#!">1</a>
						</li>
						<li className="pagination__list-item ">
							<a className="pagination__list-num" href="#!">2</a>
						</li>
					</ul>

					<a className="pagination__arrow" href="#!">
						<IoIosArrowForward className="pagination__arrow-icon" />
					</a>
				</div>
			</div >
		</>
	)
}

export default BlogContent