import './contactsPage.scss'
import { nanoid } from 'nanoid'
import { TfiEmail } from "react-icons/tfi";
import {
	FaFacebook,
	FaInstagram,
	FaPinterest,
	FaWhatsapp,
	FaYoutube
} from "react-icons/fa";
import CPSlider from './CPSlider';
import useMediaQuery from '../../hooks/useMediaQuery';
import { sendTelegramMessage } from '../../utils/tlegram';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const socialIcons = [
	<FaFacebook className="contact__social-image" />,
	<FaInstagram className="contact__social-image" />,
	<FaPinterest className="contact__social-image" />,
	<FaWhatsapp className="contact__social-image" />,
	<FaYoutube className="contact__social-image" />
]

type Inputs = {
	comment: string,
	name: string,
	email: string
}

const ContactsPage = () => {
	const showBottomSlider = useMediaQuery('(min-width: 401px)')

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

	useTitle("Send us a message")

	return (
		<>
			<div className="map container-fluid">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2393.179914703663!2d29.23415107623132!3d53.1428655722309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d7319605ac9877%3A0x5f58bf309b462ec1!2z0L_QtdGALiDQotGD0YXQsNGH0LXQstGB0LrQvtCz0L4gNiwg0JHQvtCx0YDRg9C50YHQuiwg0JzQvtCz0LjQu9GR0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjA!5e0!3m2!1sru!2sby!4v1706518932497!5m2!1sru!2sby" width="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
			</div>

			<section className="contact">
				<div className="container">
					<h3 className="contact__title">
						Наши контакты
					</h3>
					<div className="contact__box">
						<ul className="contact__social">
							{socialIcons.map(icon => (
								<li
									className="contact__social-item"
									key={nanoid()}
								>
									<a className="contact__social-link" href="#!">
										{icon}
									</a>
								</li>
							))}
						</ul>

						<p className="contact__text">
							Современный рынок домашней мебели предлагает огромный выбор различных моделей и стилей. От классической до современной, от минималистической до роскошной - каждый может выбрать мебель, которая подходит именно ему.
							В итоге, домашняя мебель - это не только предметы интерьера, но и инвестиция в свой комфорт и уют. Правильно выбранная мебель поможет создать уютную атмосферу в доме и обеспечит комфортную жизнь.
						</p>
						<a className="contact__phone" href="tel:+375225470160">
							+375 (225) 47-01-60
						</a>
						<div className="contact__street">
							пер. Тухачевского, 6
						</div>
						<div className="contact__city">
							г.Бобруйск, Могилевская обл., Беларусь, 213809.
						</div>
						<a className="info-email" href="#!">
							<TfiEmail
								size={'16px'}
								style={{ position: 'absolute', marginTop: '6px' }}
							/>
							<span>email@example.com</span>
						</a>

						<form className="contact__form" onSubmit={handleSubmit(handleSendForm)}>
							<input
								className="contact__form-input"
								placeholder='Ваше имя'
								type="name"
								{...register("name", { required: true })}
							/>
							<input
								className="contact__form-input"
								placeholder='Ваш e-mail'
								type="email"
								{...register("email", { required: true })}
							/>
							<textarea
								className="contact__form-area"
								placeholder='Ваше сообщение'
								{...register("comment", { required: true })}
							/>



							<button className="contact__form-btn" type='submit'>
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
				</div>
			</section>

			{showBottomSlider && <CPSlider />}
			<div><Toaster /></div>
		</>
	)
}

export default ContactsPage