import { TitleT, TitlesDataT } from '@/types'
import axios from 'axios'

const img_url = 'https://static-libria.weekstorm.one'
const video_url = 'https://cache.libria.fun'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_ORIGIN_URL as string

export const getAnilibria = {
	async search(params?: string, sort?: string) {
		return (await axios
			.post(`/api/title/search`, { search: params ? params : sort })
			.then(res => res.data)) as TitlesDataT
	},
	async title(sort?: string) {
		return (await axios
			.post(`/api/title`, { search: sort })
			.then(res => res.data)) as TitleT
	},
	async random(sort?: string) {
		return (await axios
			.post(`/api/title/random`, { search: sort })
			.then(res => res.data)) as TitleT
	},
}
