import axios from 'axios'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL as string

export async function GET(req: Request) {
	try {
		const headersList = headers()
		const referer = headersList.get('referer')
		const authorization = headersList.get('authorization')
		const origin = headersList.get('origin')
		const forwardedFor = headersList.get('x-forwarded-for') ?? '0.0.0.0'
		const realIp = headersList.get('x-real-ip') ?? '0.0.0.0'
		const cookie = headersList.get('cookie')
		const userAgent = headersList.get('user-agent')

		const headersObj: any = {
			referer,
			authorization,
			origin,
			forwardedFor,
			realIp,
			cookie,
			userAgent,
		}

		console.log(headersObj)

		// const FALLBACK_IP_ADDRESS = '0.0.0.0'

		// if (forwardedFor) {
		// 	return forwardedFor.split(',')[0] ?? FALLBACK_IP_ADDRESS
		// }

		// return headers().get('x-real-ip') ?? FALLBACK_IP_ADDRESS

		return await axios
			.get(`/title/search?search=Поднятие уровня в одиночку`, {
				headers: { headersObj },
			})
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
