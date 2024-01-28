import { Suspense, lazy } from 'react';
import './homePage.scss'
import HPSlider from './HPSlider'
import LoaderSpinner from '../../components/LoaderSpinner/LoaderSpinner';

const Collection = lazy(() => import('../../components/Collection/Collection'))
const Redundant = lazy(() => import('./Redundant'))
const HowItWorks = lazy(() => import('./HowItWorks'))
const Gallery = lazy(() => import('../../components/Gallery/Gallery'))
const BlogBox = lazy(() => import('./BlogBox'))

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
					<Suspense fallback={<LoaderSpinner />}>
						<Collection />
					</Suspense>
				</div>
			</section>

			<Suspense fallback={<LoaderSpinner />}>
				<Redundant />
			</Suspense>

			<Suspense fallback={<LoaderSpinner />}>
				<HowItWorks />
			</Suspense>

			<Suspense fallback={<LoaderSpinner />}>
				<Gallery />
			</Suspense>

			<Suspense fallback={<LoaderSpinner />}>
				<BlogBox />
			</Suspense>
		</>
	)
}

export default HomePage