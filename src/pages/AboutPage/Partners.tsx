import './aboutPage.scss'
const partners = Object.values(import.meta.glob('@assets/images/partners/*.{png,jpg,jpeg,PNG,JPEG,webp}', { eager: true, as: 'url' }))

const Partners = () => {
	return (
		<div className="partners">
			<div className="container-fluid">
				<div className="partners__items">
					<img className="partners__item-img" src={partners[0]} alt={partners[0]} />
					<img className="partners__item-img" src={partners[1]} alt={partners[1]} />
					<img className="partners__item-img" src={partners[2]} alt={partners[2]} />
					<img className="partners__item-img" src={partners[3]} alt={partners[3]} />
					<img className="partners__item-img" src={partners[4]} alt={partners[4]} />
				</div>
			</div>
		</div>
	)
}

export default Partners