import { EyeFilledIcon, EyeSlashFilledIcon, MailIcon, PassIcon } from '@/images'
import { authAnilibria } from '@/service/anilibria.service'
import { Button, Input } from '@nextui-org/react'
import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaCircleUser } from 'react-icons/fa6'
import { toast } from 'react-toastify'

interface IFormInput {
	login: string
	email: string
	password: string
}

export const Register: React.FC = () => {
	const recaptchaRef = React.useRef<any>()

	const [isVisible, setIsVisible] = React.useState(false)
	const [isLoading, setIsLoading] = React.useState(false)

	const toggleVisibility = React.useCallback(
		() => setIsVisible(!isVisible),
		[isVisible]
	)

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IFormInput>()

	const onSubmit: SubmitHandler<IFormInput> = async data => {
		setIsLoading(true)

		const token = await recaptchaRef?.current.executeAsync()

		await authAnilibria
			.registration({
				login: data.login,
				mail: data.email,
				passwd: data.password,
				token: token,
			})
			.then(res => {
				if (res.err === 'ok') return toast.success(`${res?.mes}`)

				toast.error(`${res?.mes}`)
			})
			.catch((err: Error) => {
				toast.error(`${err?.message}`)
				console.error(err)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}

	return (
		<form className='grid grid-cols-1 gap-3' onSubmit={handleSubmit(onSubmit)}>
			<Input
				type='text'
				label='Введите логин'
				placeholder='Sasha'
				isRequired
				startContent={
					<FaCircleUser className='pointer-events-none flex-shrink-0 text-xl text-default-400' />
				}
				labelPlacement='inside'
				{...register('login', {
					required: 'Логин не введена!',
				})}
				errorMessage={errors.login?.message}
			/>
			<Input
				type='text'
				label='Введите свою почту'
				placeholder='you@example.com'
				startContent={
					<MailIcon
						className='pointer-events-none flex-shrink-0 text-2xl text-default-400'
						name='mailIcon'
					/>
				}
				labelPlacement='inside'
				{...register('email', {
					required: 'Почта не введена!',
					pattern: {
						value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
						message: 'Почта введена не корректно',
					},
				})}
				isRequired
				errorMessage={errors.email?.message}
			/>
			<Input
				{...register('password', {
					required: 'Пароль не введен',
					minLength: {
						value: 6,
						message: 'Пароль больше 6 символов',
					},
					maxLength: {
						value: 20,
						message: 'Пароль меньше 20 символов',
					},
				})}
				errorMessage={errors.password?.message}
				label='Введите ваш пароль'
				placeholder='Пароль'
				labelPlacement='inside'
				startContent={
					<PassIcon
						className=' pointer-events-none flex-shrink-0 text-xl text-default-400'
						name='PassIcon'
					/>
				}
				isRequired
				endContent={
					<button
						className='focus:outline-none'
						type='button'
						onClick={toggleVisibility}
						title='Eye'
					>
						{isVisible ? (
							<EyeSlashFilledIcon
								className='pointer-events-none text-2xl text-default-400'
								name='EyeSlashFilledIcon'
							/>
						) : (
							<EyeFilledIcon
								className='pointer-events-none text-2xl text-default-400'
								name='EyeFilledIcon'
							/>
						)}
					</button>
				}
				type={isVisible ? 'text' : 'password'}
			/>
			<ReCAPTCHA
				ref={recaptchaRef}
				size='invisible'
				sitekey='6LdzriAdAAAAAPmAAOMlkiNR3-a3AF8CEJ8CqoiT'
			/>
			<Button
				type='submit'
				variant='shadow'
				color='primary'
				isLoading={isLoading}
			>
				Зарегистрироваться
			</Button>
		</form>
	)
}
