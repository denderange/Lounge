import { Link } from 'react-router-dom'
import './notFoundPage.scss'

const NotFoundPage = () => {
	return (
		<div className='page-404'>
			<h6 className='page-404__title'>
				404
			</h6>
			<p className='page-404__text'>
				Произошла ошибка
			</p>
			<Link to={'/'} className='page-404__link'>Вернуться на главную страницу</Link>
		</div>
	)
}

export default NotFoundPage