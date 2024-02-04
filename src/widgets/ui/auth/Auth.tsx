import { Card, CardBody, CardHeader } from '@nextui-org/react'
import React from 'react'
import { Login } from './Login'

export const Auth: React.FC = () => {
	return (
		<div className='max-w-[400px] mx-auto mt-60'>
			<Card className='max-w-full'>
				<CardHeader>
					<h1 className='text-xl font-semibold text-center w-full'>
						Добро пожаловать
					</h1>
				</CardHeader>
				<CardBody className='overflow-hidden'>
					<Login />
				</CardBody>
			</Card>
		</div>
	)
}
