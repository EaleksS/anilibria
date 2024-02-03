import axios from 'axios'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

interface Data {
	mail: string
	passwd: string
}
export async function POST(req: Request) {
	try {
		const data: any = await req.json()

		const form = new FormData()
		for (const key in data) {
			form.append(key, data[key])
		}

		return await axios
			.post(`https://anilibria.tv/public/login.php`, form)
			.then(res => {
				const cookieStore = cookies()
				cookieStore.set('session', res.data.sessionId, { secure: true })

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
