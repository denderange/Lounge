import './homePage.scss'
import { SiInteractiondesignfoundation } from "react-icons/si";
import { TbToolsOff } from "react-icons/tb";
import { BsHouseGearFill } from "react-icons/bs";

const HowItWorks = () => {
	return (
		<section className="hworks">
			<div className="container">
				<h3 className="hworks__title">
					Как мы работаем
				</h3>
				<div className="hworks__items">
					<div className="hworks__items-box">
						<div className="hworks__item hworks__item--consultation">
							<TbToolsOff
								size={35}
								color='#35281f'
							/>
							<h6 className="hworks__item-title">
								Изготовление
							</h6>
							<p className="hworks__item-text">
								Производство мебели является одной из важнейших отраслей промышленности, которая имеет большое значение для комфортной жизни людей.
							</p>
						</div>

						<div className="hworks__item hworks__item--production">
							<SiInteractiondesignfoundation
								size={35}
								color='#35281f'
							/>
							<h6 className="hworks__item-title">
								Дизайн
							</h6>
							<p className="hworks__item-text">
								На основе проекта начинается
								изготовление мебели.
							</p>
						</div>
					</div>

					<div className="hworks__item hworks__item--measures">
						<BsHouseGearFill size={35} color='#35281f' />
						<h6 className="hworks__item-title">
							Качество
						</h6>
						<p className="hworks__item-text">
							Важным аспектом производства мебели является качество продукции. Качественная мебель должна быть прочной, долговечной и удобной в использовании.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HowItWorks