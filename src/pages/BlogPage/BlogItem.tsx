import { useState } from 'react'
import Citation from './Citation'
import RenderArticle from './RenderArticle'
import Tags from './Tags'
import './blogPage.scss'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import avatarImg from '../../assets/images/userAvatar.svg'
import { GiCheckMark } from "react-icons/gi";
import useMediaQuery from '../../hooks/useMediaQuery'
import { useForm, SubmitHandler } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast';
import { sendTelegramMessage } from '../../utils/tlegram'

// TODO information like userPlaceholder should income from API
const userPlaceholder = [
	{
		id: 259,
		avatarImage: avatarImg,
		userName: "Зинаида Мороз",
		textMessage: "Одним из главных преимуществ хорошей мебели является ее надежность и долговечность. Она изготавливается из высококачественных материалов, таких как натуральное дерево, металл, кожа и т.д."
	}
]

type Inputs = {
	comment: string,
	name: string,
	email: string
}

const BlogItem = () => {
	const showNavItemsText = useMediaQuery('(min-width: 490px)')
	const [checkerRemember, setCheckedRemember] = useState(false)

	const checkerHandler = () => {
		setCheckedRemember(prev => !prev)
	}

	const notifySendSuccess = () => toast('Сообщение отправлено.', {
		style: {
			border: '1px solid #a59d46',
			backgroundColor: "#fdf6a1"
		},
	});

	const notifySendError = () => toast('Ваше сообщение не отправлено.', {
		style: {
			border: '1px solid #222f46',
			backgroundColor: "#548df0"
		},
	});


	const {
		register,
		handleSubmit,
		reset,
	} = useForm<Inputs>()

	const handleSendForm: SubmitHandler<Inputs> = async (data): Promise<void> => {
		try {
			const message = `
											source: *** lounge *** |||
											comment: ${data.comment} ||| 
											name: ${data.name} |||
											email: ${data.email}
											`

			await sendTelegramMessage(message)
			notifySendSuccess()

		} catch (error) {
			notifySendError()
		} finally {
			reset()
		}
	}

	return (
		<div className="blog-article">
			<RenderArticle />
			<Citation />

			<p>
				Хорошая мебель – это не просто предмет интерьера, а настоящее произведение искусства, которое не только украшает ваш дом, но и делает его более комфортным и уютным. Кроме того, качественная мебель может прослужить вам десятилетиями, сохраняя свой первоначальный вид и функциональность.
				Одним из главных преимуществ хорошей мебели является ее надежность и долговечность. Она изготавливается из высококачественных материалов, таких как натуральное дерево, металл, кожа и т.д. Такие материалы не только прочны и долговечны, но и придают мебели уникальный стиль и элегантность.
			</p>

			<Tags />

			<div className="blog-article__links">
				<a className="blog-article__link blog-article__link-prev" href="#!">
					<IoIosArrowBack />
					{showNavItemsText && (<>
						Использование специального оборудования
					</>)}
				</a>
				<a className="blog-article__link blog-article__link-next" href="#!">
					{showNavItemsText && (<>
						Диван с мягкими подушками и удобным креслом позволит расслабиться после тяжелого дня
					</>)}
					<IoIosArrowForward />
				</a>
			</div>

			<div className="blog-article__comments">
				<h4 className="blog-article__comments-title">
					Комментарии:
				</h4>
				{/* TODO: comments should be Array.map() of comments from API ---> */}
				<div className="blog-article__comments-item">
					<img className="blog-article__comments-avatar" src={userPlaceholder[0].avatarImage} alt="user avatar" />
					<div className="blog-article__comments-info">
						<p className="blog-article__comments-name">
							{userPlaceholder[0].userName}
						</p>
						<p className="blog-article__comments-date">
							{/* TODO: replace hardcoded month-year-date line: */}
							Февраль 1, 2024
						</p>
						<p className="blog-article__comments__text">
							{userPlaceholder[0].textMessage}
						</p>
					</div>
					<button className="blog-article__reply">Ответить</button>
				</div>

				<form className="blog-article__form" onSubmit={handleSubmit(handleSendForm)}>
					<h4 className="blog-article__form-title">
						Написать комментарий
					</h4>
					<textarea
						className="blog-article__form-textarea"
						placeholder="Ваш комментарий"
						{...register("comment", { required: true })}
					/>
					<input
						className="blog-article__form-input"
						type="text"
						placeholder="Ваше имя"
						{...register("name", { required: true })}
					/>
					<input
						className="blog-article__form-input"
						type="email"
						placeholder="Ваш e-mail"
						{...register("email", { required: true })}
					/>
					<label className="blog-article__form-label">
						<input
							className="blog-article__form-labelinput"
							type="checkbox"
							checked={checkerRemember}
							onChange={checkerHandler}
						/>
						<span className="blog-article__form-check"></span>
						{checkerRemember && <GiCheckMark className="blog-article__form-checkmark" />}

						<i>
							Запомнить меня
						</i>
					</label>
					<button
						className="blog-article__form-btn"
						type='submit'
					>
						Отправить
					</button>

					<span
						style={{
							display: "block",
							position: "relative",
							fontSize: "16px",
							color: "#b61d1d",
							backgroundColor: "#ffd8d8"
						}}
					>
						Сообщение отправляется в Telegram разработчика
					</span>
				</form>
			</div>

			<div><Toaster /></div>
		</div>
	)
}

export default BlogItem