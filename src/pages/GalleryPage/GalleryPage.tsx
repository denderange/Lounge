import Gallery from '../../components/Gallery/Gallery'
import useTitle from '../../hooks/useTitle'
import './galleryPage.scss'

const GalleryPage = () => {

	useTitle("Gallery of our collection")
	return (
		<>
			<Gallery />
		</>
	)
}

export default GalleryPage