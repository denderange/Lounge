import './aboutPage.scss'
import pageImg from '../../assets/images/aboutPage/abp-3.webp'
import useMediaQuery from '../../hooks/useMediaQuery'

const Inspiration = () => {
	const showInspImage = useMediaQuery('(min-width: 769px)')

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
					{showInspImage && (
						<img className="inspiration__image" src={pageImg} alt="decor background" />
					)}

					<div className="inspiration__content">
						<h3 className="inspiration__title">
							Мы готовы помочь вам создать идеальный дом
						</h3>
						<p className="inspiration__text">
							Мебель должна соответствовать общему стилю интерьера и создавать гармоничную атмосферу в комнате. Не менее важно выбирать качественные материалы, которые обеспечат долговечность и надежность мебели.
						</p>

						<ul className="inspiration__list">
							{renderLineProcent("Проектирование и разработка дизайна", 88)}
							{renderLineProcent("Выбор материалов", 55)}
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