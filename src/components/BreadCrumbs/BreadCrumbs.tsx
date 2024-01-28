import './breadCrumbs.scss'

const BreadCrumbs = () => {
	return (
		<div className="breadcrumbs">
			<div className="container">
				<ul className="breadcrumbs__list">
					<li className="breadcrumbs__item">
						<a className="breadcrumbs__link" href="#!">
							На главную
						</a>
					</li>
					<li className="breadcrumbs__item">
						<a className="breadcrumbs__link" href="#!">
							О нас
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default BreadCrumbs