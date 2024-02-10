import { useState, useEffect } from 'react'
import logoImg from '/logo.jpg'
import './header.scss'
import { FaChair } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';
import RightSideMenu from '../RightSideMenu/RightSideMenu';
import useMediaQuery from '../../hooks/useMediaQuery';
import BurgerBtn from '../BurgerBtn/BurgerBtn';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = () => {
	const location = useLocation();

	const [rightMenuActive, setRightMenuActive] = useState(false)
	const [burgerMenuIsActive, setBurgerMenuIsActive] = useState(false)
	const [navMenuActive, setNavMenuActive] = useState("")
	const screenMedium = useMediaQuery('(min-width: 769px)');
	const screenSizeToShowBurger = useMediaQuery('(min-width: 601px)')

	const toggleRightMenu = () => {
		setRightMenuActive(prev => !prev)
	}

	const toggleBurgerMenu = () => {
		setBurgerMenuIsActive(prev => !prev)
	}

	const onClickNav = () => {
		setBurgerMenuIsActive(false)
	}

	const renderMenuLink = (href: string, text: string) => {
		return (
			<li className="menu__list-item">
				<Link
					to={href}
					className={href === navMenuActive ? "menu__list-link menu__list-link--active" : "menu__list-link"}
				>
					{text}
				</Link>
			</li>
		)
	}

	useEffect(() => {
		setNavMenuActive(location.pathname.slice(1))
	}, [location])

	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<nav className="menu">
						<ul className="menu__list">
							{renderMenuLink("about", "О нас")}
							{renderMenuLink("gallery", "Галлерея")}
						</ul>
					</nav>

					<Link to="/" className="logo">
						<img src={logoImg} alt="lounge company logo" />
					</Link>

					<nav className="menu">
						<ul className="menu__list">
							{renderMenuLink("blog", "Блог")}
							{renderMenuLink("contacts", "Контакты")}
						</ul>
					</nav>

					{screenMedium && (
						<>
							<button
								className="header__btn"
								onClick={() => toggleRightMenu()}
							>
								<FaChair
									size={25}
									className='header__btn-image'
								/>
							</button>

							<RightSideMenu
								setRightMenuActive={toggleRightMenu}
								rightMenuActive={rightMenuActive}
							/>
						</>
					)}

					{!screenSizeToShowBurger &&
						<>
							<BurgerBtn
								toggleBurgerMenu={toggleBurgerMenu}
								burgerMenuIsActive={burgerMenuIsActive}
							/>
							<BurgerMenu
								isActive={burgerMenuIsActive}
								navMenuActive={navMenuActive}
								onClickNav={onClickNav}
							/>
						</>
					}

				</div>
			</div>
		</header>
	)
}

export default Header