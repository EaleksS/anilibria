import { getAnilibria } from '@/service/anilibria.service'
import { useQuery } from '@tanstack/react-query'

export const useRandomTitleQuery = (sort?: string) => {
	const query = useQuery({
		queryKey: ['random', sort],
		queryFn: () => getAnilibria.random(sort),
	})

	return query
}
