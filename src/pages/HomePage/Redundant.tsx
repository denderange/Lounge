import './homePage.scss'
import bgImg from '../../assets/images/bg-section-redundant.webp'

const Redundant = () => {
	return (
		<section
			className="redundant"
			style={{ backgroundImage: `url(${bgImg})` }}
		>
			<div className="container">
				<h2 className="redundant__title">
					Более 50.000 актуальных предложений.
				</h2>
				<p className="redundant__text">
					Создать уютное и комфортное пространство для полноценной жизни поможет красивая и качественная мебель
				</p>
			</div>
			<div className="redundant__overlay"></div>
		</section>
	)
}

export default Redundant