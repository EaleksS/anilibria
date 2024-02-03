import { getAnilibria } from '@/service/anilibria.service'
import { useQuery } from '@tanstack/react-query'

export const useUpdatesTitleQuery = (sort?: string) => {
	const query = useQuery({
		queryKey: ['updates', sort],
		queryFn: () => getAnilibria.updates(sort),
		refetchOnWindowFocus: true,
	})

	return query
}
