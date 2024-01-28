import { useEffect, useRef } from 'react';
// @ts-ignore
import mixitup from 'mixitup';
import './gallery.scss'

const gallery = Object.values(import.meta.glob('@assets/images/gallery/*.{png,jpg,jpeg,PNG,JPEG,webp}', { eager: true, as: 'url' }))

type chapterType = {
	title: string,
	href: string,
	img: string[],
	category: string
}

const chapters: chapterType[] = [
	{
		title: "Гостинная",
		href: "#!",
		img: [gallery[0], gallery[1], gallery[2], gallery[3], gallery[4]],
		category: "bath"
	},
	{
		title: "В спальную комнату",
		href: "#!",
		img: [gallery[6], gallery[5], gallery[7], gallery[8], gallery[9]],
		category: "living"
	},
	{
		title: "Для ванной",
		href: "#!",
		img: [gallery[10], gallery[11], gallery[12], gallery[13], gallery[14]],
		category: "office"
	},
	{
		title: "Кухня",
		href: "#!",
		img: [gallery[15], gallery[16], gallery[17], gallery[18], gallery[19]],
		category: "kitchen"
	},
	{
		title: "Офисная мебель",
		href: "#!",
		img: [gallery[20], gallery[21], gallery[22], gallery[23], gallery[24]],
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