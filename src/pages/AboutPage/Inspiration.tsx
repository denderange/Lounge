import './aboutPage.scss'
import pageBg from '../../assets/images/aboutPage/abp-4.webp'
import pageImg from '../../assets/images/aboutPage/abp-3.webp'

const Inspiration = () => {

	const renderLineProcent = (text: string, procent: number) => (
		<li className="inspiration__item">
			<div className="inspiration__item-content">
				<p className="inspiration__item-text">
					{text}
				</p>
				<p className="inspiration__item-num">
					{procent}%
				</p>
			</div>
			<div
				className="inspiration__item-line"
				style={{ width: `${procent}%` }}
			></div>
		</li>
	)
	return (
		<section className="inspiration">
			<div className="container-fluid">
				<div className="inspiration__inner">
					<img className="inspiration__image" src={pageImg} alt="decor background" />

					<div className="inspiration__content">
						<h3 className="inspiration__title">
							Мы готовы помочь вам создать идеальный дом
						</h3>
						<p className="inspiration__text">
							Мебель должна соответствовать общему стилю интерьера и создавать гармоничную атмосферу в комнате. Не менее важно выбирать качественные материалы, которые обеспечат долговечность и надежность мебели.
						</p>

						<ul className="inspiration__list">
							{renderLineProcent("Проектирование и разработка дизайна", 88)}
							{renderLineProcent("Выбор материалов", 75)}
							{renderLineProcent("Изготовление конструкции", 68)}
							{renderLineProcent("Упаковка и доставка", 95)}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Inspiration