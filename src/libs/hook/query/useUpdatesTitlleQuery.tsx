import { getAnilibria } from '@/service/anilibria.service'
import { useSuspenseQuery } from '@tanstack/react-query'

export const useUpdatesTitleQuery = (sort?: string) => {
	const query = useSuspenseQuery({
		queryKey: ['updates', sort],
		queryFn: () => getAnilibria.updates(sort),
		refetchOnWindowFocus: true,
	})

	return query
}
