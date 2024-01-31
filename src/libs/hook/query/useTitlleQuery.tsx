import { getAnilibria } from '@/service/anilibria.service'
import { useSuspenseQuery } from '@tanstack/react-query'

export const useTitleQuery = (sort?: string) => {
	const query = useSuspenseQuery({
		queryKey: ['title', sort],
		queryFn: () => getAnilibria.title(sort),
		refetchOnWindowFocus: true,
	})

	return query
}
