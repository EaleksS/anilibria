import { Spinner } from '@nextui-org/react'

export default function Loading() {
	return (
		<div className='fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center'>
			<Spinner color='primary' label='Загрузка...' labelColor='primary' />
		</div>
	)
}
