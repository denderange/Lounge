import './homePage.scss'
import HPSlider from './HPSlider'
import Collection from '../../components/Collection/Collection'
import Redundant from './Redundant'

const HomePage = () => {

	return (
		<>
			<section className="top">
				<div className="top__inner">
					<div className="top__slider">
						<HPSlider />
					</div>
				</div>
			</section>

			<section className="new-collection">
				<div className="container-fluid">
					<h3 className="new-collection__title">
						Коллекция нового сезона
					</h3>
					<p className="new-collection__text">
						Независимо от того, какой стиль вы предпочитаете, мебель всегда будет являться ключевым элементом вашего дома.
					</p>

					<Collection />
				</div>
			</section>

			<Redundant />
		</>
	)
}

export default HomePage