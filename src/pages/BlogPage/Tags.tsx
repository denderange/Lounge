import './blogPage.scss'

const tags = [
	"Рассрочка и кэшбэк",
	"Скидки и акции",
	"Комплектующие",
	"стулья, кресла",
	"пуфики и банкетки",
	"комоды, тумбы, кровати",
]

const Tags = () => {
	return (
		<div className="blog__tags">
			<h6 className="blog__tags-title">Тэги</h6>
			{tags.map(tag => (
				<a className="blog__tags-link" href="#!" key={tag}>{tag}</a>
			))}
		</div>
	)
}

export default Tags