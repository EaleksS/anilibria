'use client'

import { Card, CardBody, CardHeader, Tab, Tabs } from '@nextui-org/react'
import { Key } from '@react-types/shared'
import React from 'react'
import { Login } from './Login'
import { Register } from './Register'

export const Auth: React.FC = () => {
	const [selected, setSelected] = React.useState<Key>('login')

	return (
		<div className='max-w-[400px] mx-auto mt-60'>
			<Card className='max-w-full h-[400px]'>
				<CardHeader>Добро пожаловать в api anilibria</CardHeader>
				<CardBody className='overflow-hidden'>
					<Tabs
						fullWidth
						size='md'
						aria-label='Tabs form'
						selectedKey={selected}
						onSelectionChange={setSelected}
					>
						<Tab key='login' title='Войти'>
							<Login />
						</Tab>
						<Tab key='sign-up' title='Регистрация'>
							<Register />
						</Tab>
					</Tabs>
				</CardBody>
			</Card>
		</div>
	)
}
