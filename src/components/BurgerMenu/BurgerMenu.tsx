import { Link } from 'react-router-dom'
import './burgerMenu.scss'

type BurgerMenuProps = {
	isActive: boolean,
	navMenuActive: string,
	onClickNav: () => void
}

interface NavLinks {
	href: string,
	text: string
}

const navLinks: NavLinks[] = [
	{ href: "about", text: "О нас" },
	{ href: "gallery", text: "Галлерея" },
	{ href: "blog", text: "Блог" },
	{ href: "contacts", text: "Контакты" },
]

const BurgerMenu = ({ isActive, navMenuActive, onClickNav }: BurgerMenuProps) => {
	return (
		<nav className={isActive ? "burger-menu burger-menu--open" : "burger-menu"}>
			<ul className="burger-menu__list">
				{navLinks.map(link => (
					<li className="burger-menu__list-item" key={link.href}>
						<Link
							to={link.href}
							onClick={() => onClickNav()}
							className={navMenuActive === link.href ? "burger-menu__list-link burger-menu__list-link--active" : "burger-menu__list-link"}
						>
							{link.text}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default BurgerMenu