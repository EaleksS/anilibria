import { authAnilibria } from '@/service/anilibria.service'
import { useQuery } from '@tanstack/react-query'

export const useFavoriteQuery = (session: string) => {
	const query = useQuery({
		queryKey: ['favorite'],
		queryFn: () => authAnilibria.favorites(session),
		refetchOnWindowFocus: true,
		enabled: !!session,
	})

	return query
}
