import { getAnilibria } from '@/service/anilibria.service'
import { useQuery } from '@tanstack/react-query'

export const useTitleQuery = (sort?: string) => {
	const query = useQuery({
		queryKey: ['title', sort],
		queryFn: () => getAnilibria.title(sort),
		refetchOnWindowFocus: true,
	})

	return query
}
