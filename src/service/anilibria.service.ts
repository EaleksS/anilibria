import { TitleT, TitlesDataT } from '@/types'
import axios from 'axios'

const img_url = 'https://static-libria.weekstorm.one'
const video_url = 'https://cache.libria.fun'
const base_url = 'https://api.anilibria.tv/v3'

export const getAnilibria = {
	async search(params?: string, sort?: string) {
		return (await axios
			.get(
				`${base_url}/title/search${!!params ? params : ''}${!!sort ? sort : ''}`
			)
			.then(res => res.data)) as TitlesDataT
	},
	async title(sort?: string) {
		return (await axios
			.get(`${base_url}/title${!!sort ? sort : ''}`)
			.then(res => res.data)) as TitleT
	},
	async random(sort?: string) {
		return (await axios
			.get(`${base_url}/title/random${!!sort ? sort : ''}`)
			.then(res => res.data)) as TitleT
	},
}
