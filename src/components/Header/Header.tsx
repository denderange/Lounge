import { useState } from 'react'
import logoImg from '/logo.jpg'
import './header.scss'
import RightSideMenu from '../RightSideMenu/RightSideMenu'
import { PiListBulletsFill } from "react-icons/pi";

const Header = () => {
	const [rightMenuActive, setRightMenuActive] = useState(false)

	const toggleRightMenu = () => {
		setRightMenuActive(prev => !prev)
	}

	const renderMenuLink = (href: string, text: string) => {
		return (
			<li className="menu__list-item">
				<a className="menu__list-link" href={href}>
					{text}
				</a>
			</li>
		)
	}

	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<nav className="menu">
						<ul className="menu__list">
							{renderMenuLink("#!", "О нас")}
							{renderMenuLink("#!", "Галлерея")}
						</ul>
					</nav>
					<a href="" className="logo">
						<img src={logoImg} alt="lounge company logo" />
					</a>
					<nav className="menu">
						<ul className="menu__list">
							{renderMenuLink("#!", "Блог")}
							{renderMenuLink("#!", "Контакты")}
						</ul>
					</nav>

					<button
						className="header__btn"
						onClick={() => toggleRightMenu()}
					>
						<PiListBulletsFill
							size={30}
						/>
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