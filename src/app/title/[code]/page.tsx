import { TitleInfo } from '@/widgets/ui/title-info/TitleInfo'
import axios from 'axios'
import React from 'react'

interface TitlePageProps {
	params: {
		code: string
	}
}

export interface Mapped {
	anilibria_id: number
	myanimelist_id: number
}

export async function getID(code: string) {
	try {
		const response = (await axios
			.get(
				`https://raw.githubusercontent.com/qt-kaneko/MALibria/db/mapped.json`
			)
			.then(e => {
				return e.data
			})
			.catch(err => {
				console.error(err)
			})) as Mapped[]

		const idMy = Number(code?.split('-').splice(0, 1).join(''))

		return response.find(title => title.anilibria_id === idMy)?.myanimelist_id
	} catch (error) {
		console.error(error)

		return null
	}
}

const TitlePage: React.FC<TitlePageProps> = async ({ params: { code } }) => {
	const idMy = code?.split('-').splice(1).join('-')
	const data = await getID(code)

	return (
		<>
			<TitleInfo code={idMy} idShikamori={data ?? 0} />
		</>
	)
}

export default TitlePage
