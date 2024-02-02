import { TitleT, TitlesDataT } from '@/types'
import { UserT } from '@/types/user'
import axios from 'axios'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL as string

export const getAnilibria = {
	async search(params?: string, sort?: string) {
		return (await axios
			.get(`/title/search${!!params ? params : ''}${!!sort ? sort : ''}`)
			.then(res => res.data)) as TitlesDataT
	},
	async title(sort?: string) {
		return (await axios
			.get(`/title${!!sort ? sort : ''}`)
			.then(res => res.data)) as TitleT
	},
	async random(sort?: string) {
		return (await axios
			.get(`/title/random${!!sort ? sort : ''}`)
			.then(res => res.data)) as TitleT
	},
	async updates(sort?: string) {
		return (await axios
			.get(`/title/changes${!!sort ? sort : ''}`)
			.then(res => res.data)) as TitlesDataT
	},
}

const base_url = 'http://localhost:8000'

export const authAnilibria = {
	async login(data: { mail: string; passwd: string }) {
		return await axios
			.post(`${base_url}/api/auth/login`, {
				mail: data.mail,
				passwd: data.passwd,
			})
			.then(res => res.data)
	},
	async registration(data: {
		login: string
		mail: string
		passwd: string
		token: string
	}) {
		return await axios
			.post(`${base_url}/api/auth/register`, {
				login: data.login,
				mail: data.mail,
				passwd: data.passwd,
				token: data.token,
			})
			.then(res => res.data)
	},
	async user(session: string) {
		return (await axios
			.get(`/user?session=${session}`)
			.then(res => res.data)) as UserT
	},
	async favorites(session: string) {
		return (await axios
			.get(`/user/favorites?session=${session}`)
			.then(res => res.data)) as TitlesDataT
	},
}
