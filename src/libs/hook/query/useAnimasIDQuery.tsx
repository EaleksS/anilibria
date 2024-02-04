import { getShikamori } from '@/service/shikamori.service'
import { useQuery } from '@tanstack/react-query'

export const useAnimasIDQuery = (id: number, sort?: string) => {
	const query = useQuery({
		queryKey: ['animes', id, sort],
		queryFn: () => getShikamori.animesID(id, sort),
		refetchOnWindowFocus: true,
		enabled: !!id,
	})

	return query
}
