import { getAnilibria } from '@/service/anilibria.service'
import { useQuery } from '@tanstack/react-query'
import useQueryParams from '../useQueryParams'

export const useMangaQuery = (sort?: string) => {
	const { searchQueryParams } = useQueryParams()

	const params = searchQueryParams([''])

	const query = useQuery({
		queryKey: ['filter', params, sort],
		queryFn: () => getAnilibria.search(params, sort),
		refetchOnWindowFocus: true,
	})

	return query
}
