import './rightSideMenu.scss'
import logoImg from '/logo.jpg'
import { IoClose } from "react-icons/io5";
import titleImg from '../../assets/images/rsmp.jpeg'

type RightSideMenuProps = {
	rightMenuActive: boolean,
	setRightMenuActive: () => void
}

const RightSideMenu = ({ rightMenuActive, setRightMenuActive }: RightSideMenuProps) => {

	const handleHeaderBtn = () => {
		console.log('first')
		setRightMenuActive()
	}

	return (
		<div className={rightMenuActive ? "right-menu" : "right-menu right-menu--close"}>
			<button
				className="right-menu__close"
				onClick={() => handleHeaderBtn()}
			>
				<IoClose
					aria-label='close icon'
					size={'26px'}
					className="right-menu__close-img"
				/>
			</button>
			<div className="right-menu__content">
				<a className="right-menu__logo" href="#!">
					<img src={logoImg} alt="logo" />
				</a>
				<h4 className="right-menu__title">
					Мебель для удобной жизни
				</h4>
				<p className="right-menu__text">
					Мебель должна быть комфортной и функциональной.
					Она помогает создать уютную атмосферу в доме и отражает индивидуальность его владельцев.
				</p>
				<img className="right-menu__image" src={titleImg} alt="menu content image" />
			</div>
		</div>
	)
}

export default RightSideMenu