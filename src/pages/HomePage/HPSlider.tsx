import './homePage.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slideImg1 from '../../assets/images/slider/168568890550631.jpg'
import slideImg2 from '../../assets/images/slider/3.jpg'
import slideImg3 from '../../assets/images/slider/960x0.jpg'
import useMediaQuery from '../../hooks/useMediaQuery';

const HPSlider = () => {
	const showSliderImage = useMediaQuery('(min-width: 601px)');

	const sliderSettings = {
		autoplay: true,
		pauseOnHover: false,
		fade: true,
		autoplaySpeed: 3000,
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<Slider {...sliderSettings}>
			<div className="top__slider-item">
				{showSliderImage && (
					<img className="top__slider-img" src={slideImg1} alt="Коллекция мебели" />
				)}
				<div className="top__slider-info">
					<h2 className="top__slider-title">
						Коллекция мебели
					</h2>
					<p className="top__slider-text">
						Современная и классическая мебель. Мягкая и корпусная мебель. Эксклюзивная мебель. Специальная мебель.
					</p>
				</div>
			</div>

			<div className="top__slider-item">
				{showSliderImage && (
					<img className="top__slider-img" src={slideImg2} alt="Коллекция мебели" />
				)}
				<div className="top__slider-info">
					<h2 className="top__slider-title">
						Комфортная и функциональная
					</h2>
					<p className="top__slider-text">
						Мебель может быть как дорогой и роскошной, так и простой и практичной.
					</p>
				</div>
			</div>

			<div className="top__slider-item">
				{showSliderImage && (
					<img className="top__slider-img" src={slideImg3} alt="Коллекция мебели" />
				)}
				<div className="top__slider-info">
					<h2 className="top__slider-title">
						Практичная и удобная
					</h2>
					<p className="top__slider-text">
						У нас вы найдете мебель для спальни, гостиной, кухни, детской комнаты и офиса.
					</p>
				</div>
			</div>
		</Slider>
	)
}

export default HPSlider