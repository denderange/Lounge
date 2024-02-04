import './blogPage.scss'
import { FiSearch } from "react-icons/fi";
import { getRandomDate } from '../../utils/getRandomDate';
import { nanoid } from 'nanoid'
import {
	FaFacebook,
	FaInstagram,
	FaPinterest,
	FaWhatsapp,
	FaYoutube
} from "react-icons/fa";
import Tags from './Tags';

const socialIcons = [
	<FaFacebook className="contact__social-image" />,
	<FaInstagram className="contact__social-image" />,
	<FaPinterest className="contact__social-image" />,
	<FaWhatsapp className="contact__social-image" />,
	<FaYoutube className="contact__social-image" />
]

const blogCategories = [
	{ href: "#!", title: "Кухонные гарнитуры" },
	{ href: "#!", title: "Офисная мебель" },
	{ href: "#!", title: "Современный дизайн" },
	{ href: "#!", title: "Винтажный стиль" },
	{ href: "#!", title: "Корпусная мебель" },
	{ href: "#!", title: "Мебельная фурнитура" },
]

const blogPosts = [
	{
		href: "#!",
		text: "Мягкая мебель и корпусная мебель из натуральных материалов.",
		date: getRandomDate(new Date(2023, 0, 1), new Date())
			.toLocaleString('default', { month: 'long' }),
		author: "Оксана Борода"
	},
	{
		href: "#!",
		text: "Изготовление уникальной мебели на заказ",
		date: getRandomDate(new Date(2023, 0, 1), new Date())
			.toLocaleString('default', { month: 'long' }),
		author: "Андрей Прыщавый"
	},
	{
		href: "#!",
		text: "В производстве используется промышленное оборудование из Германии и Италии.",
		date: getRandomDate(new Date(2023, 0, 1), new Date())
			.toLocaleString('default', { month: 'long' }),
		author: "Максим Сайтовёрстов"
	},
]


const BlogAside = () => {
	const getRandomNum = () => {
		return Math.floor(3 + Math.random() * 20)
	}

	return (
		<>
			<form className="aside__search">
				<input className="aside__search-input" type="text" placeholder="поиск" />
				<button className="aside__search-btn">
					<FiSearch className="aside__search-icon" />
				</button>
			</form>

			<div className="blog__category">
				<h6 className="blog__category-title">
					Категории
				</h6>
				<ul className="blog__category-list">
					{blogCategories.map(category => (
						<li className="blog__category-item" key={category.title}>
							<a className="blog__category-link" href={category.href}>
								{category.title} ({getRandomNum()})
							</a>
						</li>
					))}
				</ul>
			</div>

			<div className="recent-posts">
				<h6 className="recent-posts__title">
					Последние статьи
				</h6>
				<ul className="recent-posts__list">
					{blogPosts.map(post => (
						<li className="recent-posts__item" key={nanoid()}>
							<a className="recent-posts__item-title" href={post.href}>
								{post.text}
							</a>
							<span className="recent-posts__date">
								{post.date}{" "}
								{getRandomDate(new Date(2023, 0, 1), new Date()).getDate()},{" "}
								2023
							</span>{" | "}
							<a className="recent-posts__author" href={post.href}>
								{post.author}
							</a>
						</li>
					))}
				</ul>
			</div>

			<Tags />

			<ul className="blog__social">
				{socialIcons.map(icon => (
					<li
						className="blog__social-item"
						key={nanoid()}
					>
						<a className="blog__social-link" href="#!">
							{icon}
						</a>
					</li>
				))}
			</ul>
		</>
	)
}

export default BlogAside