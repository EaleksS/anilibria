import { Favorite } from '@/widgets/ui/favorite/Favorite'
import { cookies } from 'next/headers'
import React from 'react'

const FavoritePage: React.FC = () => {
	const cookieStore = cookies()
	const session = cookieStore.get('session')?.value ?? ''

	return (
		<main className='max-w-7xl mx-auto'>
			<Favorite session={session} />
		</main>
	)
}

export default FavoritePage
