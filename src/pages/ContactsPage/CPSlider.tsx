import './contactsPage.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const sliderImages = Object.values(import.meta.glob('@assets/images/gallery/*.{png,jpg,jpeg,PNG,JPEG,webp}', { eager: true, as: 'url' }))

const CPSlider = () => {
	const sliderSettings = {
		slidesToShow: 10,
		slidesToScroll: 10,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
		infinite: true,
		speed: 1000,
	};

	return (
		<div className="container-fluid">
			<div className="contact-slider">
				{/* TODO add functionality for links */}
				<Slider {...sliderSettings}>
					{sliderImages.map(img => (
						<a className="contact-slider__link" href="#!">
							<img className="contact-slider__image" src={img} alt="" />
							<p className="contact-slider__text">
								Просмотр коллекции
							</p>
						</a>
					))}
				</Slider>
			</div>
		</div>
	)
}

export default CPSlider