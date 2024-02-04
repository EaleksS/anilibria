import axios from 'axios'

export const dynamic = 'force-dynamic'

interface Mapped {
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
