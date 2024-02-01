import { getAnilibria } from '@/service/anilibria.service'
import { useSuspenseQuery } from '@tanstack/react-query'

export const useRandomTitleQuery = (sort?: string) => {
	const query = useSuspenseQuery({
		queryKey: ['random', sort],
		queryFn: () => getAnilibria.random(sort),
	})

	return query
}
