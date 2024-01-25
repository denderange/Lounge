import { useState } from 'react'
import logoImg from '/logo.jpg'
import iconMenu from '/iconMenu.png'
import './header.scss'
import RightSideMenu from '../RightSideMenu/RightSideMenu'

const Header = () => {
	const [rightMenuActive, setRightMenuActive] = useState(false)

	const toggleRightMenu = () => {
		setRightMenuActive(prev => !prev)
	}

	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<nav className="menu">
						<ul className="menu__list">
							<li className="menu__list-item">
								<a className="menu__list-link" href="">
									О нас
								</a>
							</li>
							<li className="menu__list-item">
								<a className="menu__list-link" href="">
									Галлерея
								</a>
							</li>
						</ul>
					</nav>
					<a href="" className="logo">
						<img src={logoImg} alt="lounge company logo" />
					</a>
					<nav className="menu">
						<ul className="menu__list">
							<li className="menu__list-item">
								<a className="menu__list-link" href="">
									Блог
								</a>
							</li>
							<li className="menu__list-item">
								<a className="menu__list-link" href="">
									Контакты
								</a>
							</li>
						</ul>
					</nav>

					<button
						className="header__btn"
						onClick={() => toggleRightMenu()}
					>
						<img src={iconMenu} alt="open menu icon button" />
					</button>

					<RightSideMenu
						setRightMenuActive={toggleRightMenu}
						rightMenuActive={rightMenuActive}
					/>

				</div>
			</div>
		</header>
	)
}

export default Header