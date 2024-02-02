import { authAnilibria } from '@/service/anilibria.service'
import { useSuspenseQuery } from '@tanstack/react-query'

export const useUserQuery = (session: string) => {
	const query = useSuspenseQuery({
		queryKey: ['user'],
		queryFn: () => authAnilibria.user(session),
		refetchOnWindowFocus: true,
	})

	return query
}
