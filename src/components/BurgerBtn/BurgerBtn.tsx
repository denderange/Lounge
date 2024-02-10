import './burgerBtn.scss'

type BurgerBtnProps = {
	burgerMenuIsActive: boolean,
	toggleBurgerMenu: () => void
}

const BurgerBtn = ({ burgerMenuIsActive, toggleBurgerMenu }: BurgerBtnProps) => {

	return (
		<button
			className={burgerMenuIsActive ? 'burger burger--active' : 'burger'}
			onClick={() => toggleBurgerMenu()}
		>
			<span></span><span></span><span></span><span></span>
		</button>
	)
}

export default BurgerBtn