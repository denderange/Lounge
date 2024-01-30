import './aboutPage.scss'
import { IoIosPlayCircle } from "react-icons/io";
import heroBg from '../../assets/images/aboutPage/abp-1.webp'
import popupBg from '../../assets/images/aboutPage/abp-8.webp'
import PopupAbout from '../../components/PopupAbout/PopupAbout';
import Inspiration from './Inspiration';
import Partners from './Partners';
import Collection from '../../components/Collection/Collection';

const AboutPage = () => {
	return (
		<>
			<section className="about">
				<div
					className="about__prev"
					style={{ backgroundImage: `url(${heroBg})` }}
				>
					<div className="container">
						<h2 className="about__prev-title">
							О нас
						</h2>
					</div>
					<div className="about__prev-overlay"></div>
				</div>

				<div className="about__content">
					<div className="container">
						<h3 className="about__title">
							Домашняя мебель - это инвестиция в свой комфорт и уют
						</h3>
						<div className="about__text">
							<p>
								Существует огромное разнообразие домашней мебели: кровати, шкафы, комоды, столы, стулья, диваны и многое другое. Каждый предмет мебели должен соответствовать определенным требованиям, таким как удобство, функциональность, качество материалов и дизайн. Домашняя мебель - это не просто предметы интерьера, которые украшают наши дома, но и функциональные элементы, которые обеспечивают нам комфорт и удобство в повседневной жизни. Для каждого человека дом - это место, где он проводит большую часть своего времени, поэтому выбор мебели должен быть осознанным и тщательно продуманным.
							</p>
							<p>
								Одним из самых важных элементов домашней мебели является кровать. Она должна быть удобной и комфортной, чтобы обеспечить здоровый сон и отдых. Шкафы и комоды помогут организовать хранение вещей и сохранить порядок в комнате. Столы и стулья позволят удобно работать или обедать. При выборе домашней мебели необходимо учитывать не только ее функциональность, но и дизайн. Мебель должна соответствовать общему стилю интерьера и создавать гармоничную атмосферу в комнате. Не менее важно выбирать качественные материалы, которые обеспечат долговечность и надежность мебели.
							</p>
						</div>
					</div>
				</div>

				<div
					className="about__popup"
					style={{ backgroundImage: `url(${popupBg})` }}
				>
					<PopupAbout>
						<a
							className="about__popup-play"
							data-fancybox
							href="https://youtu.be/l7O49lYbI8Q?si=Ps7bt5xIhsfgPkgE"
						>
							<IoIosPlayCircle size={80} />
						</a>
					</PopupAbout>
				</div>
			</section>

			<Inspiration />
			<Partners />
			<Collection />
		</>
	)
}

export default AboutPage