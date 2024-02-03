import axios from 'axios'
import { NextResponse } from 'next/server'

interface Data {
	login: string
	mail: string
	passwd: string
	token: string
}
export async function POST(req: Request) {
	try {
		const { login, mail, passwd, token }: Data = await req.json()

		const data: any = {
			login: login,
			mail: mail,
			passwd: passwd,
			'g-recaptcha-response': token,
		}

		const form = new FormData()
		for (const key in data) {
			form.append(key, data[key])
		}

		return await axios
			.post(`https://anilibria.tv/public/registration.php`, form)
			.then(res => {
				return NextResponse.json({
					...res.data,
				})
			})
			.catch((err: Error) => {
				return NextResponse.json({
					message: err.message,
				})
			})
	} catch (err) {
		return NextResponse.json({ message: 'Internal server error' })
	}
}
