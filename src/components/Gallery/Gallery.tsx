import { useEffect, useRef } from 'react';
// @ts-ignore
import mixitup from 'mixitup';
import './gallery.scss'
import img11 from '../../assets/images/gallery/1-1.webp'
import img12 from '../../assets/images/gallery/1-2.webp'
import img13 from '../../assets/images/gallery/1-3.webp'
import img14 from '../../assets/images/gallery/1-4.webp'
import img15 from '../../assets/images/gallery/1-5.webp'

type chapterType = {
	title: string,
	href: string,
	img: string[],
	category: string
}

const chapters: chapterType[] = [
	{
		title: "Для ванной",
		href: "#!",
		img: [img11, img12, img13, img14, img15],
		category: "bath"
	},
	{
		title: "В гостинную",
		href: "#!",
		img: [img11, img12, img13, img14, img15],
		category: "living"
	},
	{
		title: "Офисная мебель",
		href: "#!",
		img: [img11, img12, img13, img14, img15],
		category: "office"
	},
	{
		title: "Кухня",
		href: "#!",
		img: [img11, img12, img13, img14, img15],
		category: "kitchen"
	},
	{
		title: "В спальную комнату",
		href: "#!",
		img: [img11, img12, img13, img14, img15],
		category: "bed"
	},
]

const Gallery = () => {
	const filterRef = useRef(null)

	useEffect(() => {
		mixitup(filterRef.current, {
			load: {
				filter: '.kitchen'
			},
			animation: {
				effectsOut: 'fade translateY(-100%)'
			}
		});
	}, []);

	return (
		<div className="gallery">
			<div className="container-fluid">
				<div className="gallery__buttons">
					{chapters.map(item => (
						<button
							className="gallery__btn"
							key={item.title}
							data-filter={`.${item.category}`}
						>
							{item.title}
						</button>
					))}
				</div>

				<div className="gallery__inner" ref={filterRef}>
					{chapters.map(item => (
						<div
							className={`gallery__items mix ${item.category}`}
							key={item.title}
						>
							{item.img.map(pic => (
								<a className="gallery__item" href={item.href}>
									<img className="gallery__image" src={pic} alt={item.title} />
								</a>
							))}
						</div>
					))}
				</div>

			</div>
		</div>
	)
}

export default Gallery