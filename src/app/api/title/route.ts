import axios from 'axios'
import { NextResponse } from 'next/server'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL as string

interface Data {
	search?: string
}

export async function POST(req: Request) {
	try {
		const { search }: Data = await req.json()

		return await axios
			.get(`/title${!!search && search}`)
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
