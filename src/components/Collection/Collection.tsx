import './collection.scss'
import img1 from '../../assets/images/collection/1.jpg'
import img2 from '../../assets/images/collection/2.jpg'
import img3 from '../../assets/images/collection/3.jpg'
import img4 from '../../assets/images/collection/4.jpg'
import img5 from '../../assets/images/collection/5.jpg'

const collectionItems = [
	// TODO: each href link should lead to it's own URL page
	{
		title: "Мебель для спальни",
		description: "Мебель по индивидуальным размерам и цветам",
		href: "#!",
		image: img1
	},
	{
		title: "Мебель для кухни",
		description: "Мы готовы помочь вам создать идеальный дом",
		href: "#!",
		image: img2
	},
	{
		title: "Мебель для ванной",
		description: "Мы работаем только с лучшими производителями",
		href: "#!",
		image: img3
	},
	{
		title: "Диваны",
		description: "Мебель должна служить вам долгие годы",
		href: "#!",
		image: img4
	},
	{
		title: "Столы",
		description: "Мебель всегда будет являться ключевым элементом вашего дома",
		href: "#!",
		image: img5
	},
]

const Collection = () => {
	return (
		<div className="collection">
			{collectionItems.map(item => (
				<a className="collection__item" href={item.href} key={item.title}>
					<img className="collection__image" src={item.image} alt={item.title} />
					<div className="collection__info">
						<h6 className="collection__info-title">
							{item.title}
						</h6>
						<p className="collection__info-text">
							{item.description}
						</p>
					</div>
				</a>
			))}
		</div>
	)
}

export default Collection