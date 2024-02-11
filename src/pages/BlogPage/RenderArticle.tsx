import { getRandomDate } from '../../utils/getRandomDate';
import './blogPage.scss'
import bglogImg1 from '../../assets/images/gallery/5-5.webp'

const blogArticles = [
	{
		title: "Современный рынок домашней мебели предлагает огромный выбор различных моделей и стилей",
		theme: "Проектирование и разработка дизайна",
		text: "Существует огромное разнообразие домашней мебели: кровати, шкафы, комоды, столы, стулья, диваны и многое другое. Каждый предмет мебели должен соответствовать определенным требованиям, таким как удобство, функциональность, качество материалов и дизайн.",
		articleLink: "#!"
	}
]

const RenderArticle = () => {
	const randomDate = () => {
		return Math.floor(1 + Math.random() * 30)
	}

	return (
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
			{/* <a className="blog__item-link" href={blogArticles[0].articleLink}> */}
			<h3 className="blog__item-title">
				{blogArticles[0].title}
			</h3>
			{/* </a> */}
			<p className="blog__item-text">
				{blogArticles[0].text}
			</p>
		</div>
	)
}

export default RenderArticle