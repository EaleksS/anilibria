import { authAnilibria } from '@/service/anilibria.service'
import { useSuspenseQuery } from '@tanstack/react-query'

export const useFavoriteQuery = (session: string) => {
	const query = useSuspenseQuery({
		queryKey: ['favorite'],
		queryFn: () => authAnilibria.favorites(session),
		refetchOnWindowFocus: true,
	})

	return query
}
