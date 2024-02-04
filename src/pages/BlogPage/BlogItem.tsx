import { useState } from 'react'
import Citation from './Citation'
import RenderArticle from './RenderArticle'
import Tags from './Tags'
import './blogPage.scss'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import avatarImg from '../../assets/images/userAvatar.svg'
import { GiCheckMark } from "react-icons/gi";

// TODO information like userPlaceholder should income from API
const userPlaceholder = [
	{
		id: 259,
		avatarImage: avatarImg,
		userName: "Зинаида Мороз",
		textMessage: "Одним из главных преимуществ хорошей мебели является ее надежность и долговечность. Она изготавливается из высококачественных материалов, таких как натуральное дерево, металл, кожа и т.д."
	}
]

const BlogItem = () => {
	const [checkerRemember, setCheckedRemember] = useState(false)

	const checkerHandler = () => {
		setCheckedRemember(prev => !prev)
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
					Использование специального оборудования
				</a>
				<a className="blog-article__link blog-article__link-next" href="#!">
					Диван с мягкими подушками и удобным креслом позволит расслабиться после тяжелого дня
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

				<form className="blog-article__form">
					<h4 className="blog-article__form-title">
						Написать комментарий
					</h4>
					<textarea
						className="blog-article__form-textarea"
						placeholder="Ваш комментарий"
					/>
					<input
						className="blog-article__form-input"
						type="text"
						placeholder="Ваше имя"
					/>
					<input
						className="blog-article__form-input"
						type="email"
						placeholder="Ваш e-mail"
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
						onClick={() => { }}
					>
						Отправить
					</button>
				</form>
			</div>
		</div>
	)
}

export default BlogItem