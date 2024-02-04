import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'

export async function GET() {
	try {
		const cookieStore = cookies()
		cookieStore.delete('session')

		redirect('/')

		return NextResponse.json({
			message: 'Сессия закончилась',
		})
	} catch (err) {
		return NextResponse.json({ message: 'Internal server error' })
	}
}
