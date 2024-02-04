import { TitleInfo } from '@/widgets/ui/title-info/TitleInfo'
import React from 'react'
import { getID } from './getID'

interface TitlePageProps {
	params: {
		code: string
	}
}

const TitlePage: React.FC<TitlePageProps> = async ({ params: { code } }) => {
	const idMy = code?.split('-').splice(1).join('-')
	const data = await getID(code)

	return (
		<>
			<TitleInfo code={idMy} idShikamori={data ?? 0} />
		</>
	)
}

export default TitlePage
