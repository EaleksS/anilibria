import axios from 'axios'

export const authAnilibria = {
	async login(data: { mail: string; passwd: string }) {
		return await axios
			.post(`${window.origin}/api/auth/login`, {
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
			.post(`/api/auth/register`, {
				login: data.login,
				mail: data.mail,
				passwd: data.passwd,
				token: data.token,
			})
			.then(res => res.data)
	},
}
