import './footer.scss'
import { TfiEmail } from "react-icons/tfi";
import {
	FaFacebook,
	FaInstagram,
	FaPinterest,
	FaWhatsapp,
	FaYoutube
} from "react-icons/fa";

const socialItems = [
	{
		name: 'Facebook',
		icon: <FaFacebook
			size={'20px'}
			style={{ position: 'absolute', marginTop: '4px' }}
		/>,
		href: '#!'
	},
	{
		name: 'Instagram',
		icon: <FaInstagram
			size={'20px'}
			style={{ position: 'absolute', marginTop: '4px' }}
		/>,
		href: '#!'
	},
	{
		name: 'Pinterest',
		icon: <FaPinterest
			size={'20px'}
			style={{ position: 'absolute', marginTop: '4px' }}
		/>,
		href: '#!'
	},
	{
		name: 'WhatsApp',
		icon: <FaWhatsapp
			size={'20px'}
			style={{ position: 'absolute', marginTop: '4px' }}
		/>,
		href: '#!'
	},
	{
		name: 'Youtube',
		icon: <FaYoutube
			size={'20px'}
			style={{ position: 'absolute', marginTop: '4px' }}
		/>,
		href: '#!'
	},
]

const menuItems = [
	{ text: 'Доставка', href: '#!' },
	{ text: 'FAQ', href: '#!' },
	{ text: 'Помощь', href: '#!' },
	{ text: 'Больше о нас', href: '#!' },
]

const Footer = () => {

	const handleBtnSend = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()
	}
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__inner">
					<div className="footer__info">
						<h6 className="footer__info-title">
							Свяжитесь с нами
						</h6>
						<p className="footer__info-text">
							Свяжитесь с нами любым удобным для вас способом
						</p>
						<a className="info-email" href="">
							<TfiEmail
								size={'16px'}
								style={{ position: 'absolute', marginTop: '6px' }}
							/>
							<span>email@example.com</span>
						</a>

						<form className="footer__form">
							<input
								className="footer__form-input"
								type="email"
								placeholder='ваш e-mail для подписки'
							/>
							<button
								className="footer__form-button"
								onClick={(e) => handleBtnSend(e)}
							>
								Отправить
							</button>
						</form>
					</div>

					<ul className="footer__social-list">
						{socialItems.map(item => (
							<li className="footer__social-item" key={item.name}>
								<a
									className="footer__social-link"
									href={item.href}
									aria-description={item.name}
								>
									{item.icon}
									<span>{item.name}</span>
								</a>
							</li>
						))}
					</ul>

					<nav className="footer__menu">
						<ul className="footer__menu-list">
							{menuItems.map(item => (
								<li className="footer__menu-item" key={item.text}>
									<a className="footer__menu-link" href={item.href}>
										{item.text}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>

			<div className="footer__copyright">
				{new Date().getFullYear()}{' '}&copy;Dennis Polukaroff
				<a className="footer__copyright-link" href="#!">
					Github
				</a>
			</div>
		</footer>
	)
}

export default Footer