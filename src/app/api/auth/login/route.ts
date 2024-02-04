import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'

interface Data {
	session: string
}

export async function POST(req: Request) {
	try {
		// const header = headers()
		// const header2 = headers().entries()
		// console.log('1', header)
		// console.log('2', header2)

		const data: Data = await req.json()

		const cookieStore = cookies()
		cookieStore.set('session', data.session, { secure: true })

		// TODO: Доделать
		// return await axios
		// 	.post(
		// 		`https://dl-20240202-9.anilib.one/public/login.php`,
		// 		{},
		// 		{ headers:  ...header.entries().toString()  }
		// 	)
		// 	.then(res => {
		// 		const cookieStore = cookies()
		// 		cookieStore.set('session', res.data.sessionId, { secure: true })

		// 		return NextResponse.json({
		// 			...res.data,
		// 		})
		// 	})
		// 	.catch((err: Error) => {
		// 		return NextResponse.json({
		// 			message: err.message,
		// 		})
		// 	})

		return redirect('/')
	} catch (err) {
		return NextResponse.json({ message: 'Internal server error' })
	}
}
