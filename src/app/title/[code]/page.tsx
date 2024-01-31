import { TitleInfo } from '@/widgets/ui/title-info/TitleInfo'
import React from 'react'

interface TitlePageProps {
	params: {
		code: string
	}
}

const TitlePage: React.FC<TitlePageProps> = ({ params: { code } }) => {
	return (
		<>
			<TitleInfo code={code} />
		</>
	)
}

export default TitlePage
