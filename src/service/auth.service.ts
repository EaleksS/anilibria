import axios from 'axios'

const form = new FormData()

export const authAnilibria = {
	async login(data: { mail: string; passwd: string }) {
		form.append('mail', data.mail)
		form.append('passwd', data.passwd)

		return await axios
			.post(`https://dl-20240202-9.anilib.one/public/login.php`, form)
			.then(res => res.data)
	},
	async loginSession(data: { session: string }) {
		return await axios
			.post(`${origin}/api/auth/login`, {
				session: data.session,
			})
			.then(res => res.data)
	},
}
