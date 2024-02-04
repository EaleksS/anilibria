'use client'

import { EyeFilledIcon, EyeSlashFilledIcon, MailIcon, PassIcon } from '@/images'
import { authAnilibria } from '@/service/auth.service'
import { Button, Input } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

interface IFormInput {
	email: string
	password: string
}

export const Login: React.FC = () => {
	const [isVisible, setIsVisible] = React.useState(false)
	const [isLoading, setIsLoading] = React.useState(false)

	const router = useRouter()

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

		await authAnilibria
			.login({
				mail: data.email,
				passwd: data.password,
			})
			.then(res => {
				if (res.err === 'ok') {
					toast.success(`${res?.mes}`)
					;(async () => {
						await authAnilibria.loginSession({ session: res?.sessionId })
					})()

					setTimeout(() => {
						router.push('/')
					}, 100)

					return
				}

				toast.error(`${res?.mes}`)
			})
			.catch((err: Error) => {
				toast.error(`${err.message}`)
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
				label='Введите свою почту или логин'
				placeholder='you@example.com'
				startContent={
					<MailIcon
						className='pointer-events-none flex-shrink-0 text-2xl text-default-400'
						name='mailIcon'
					/>
				}
				labelPlacement='inside'
				isRequired
				{...register('email', {
					required: 'Почта или логин не введены!',
				})}
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
				isRequired
				labelPlacement='inside'
				startContent={
					<PassIcon
						className=' pointer-events-none flex-shrink-0 text-xl text-default-400'
						name='PassIcon'
					/>
				}
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

			<Button
				type='submit'
				variant='shadow'
				color='primary'
				isLoading={isLoading}
			>
				Войти
			</Button>
		</form>
	)
}
