import { authAnilibria } from '@/service/anilibria.service'
import { useQuery } from '@tanstack/react-query'

export const useUserQuery = (session: string) => {
	const query = useQuery({
		queryKey: ['user'],
		queryFn: () => authAnilibria.user(session),
		refetchOnWindowFocus: true,
		enabled: !!session,
	})

	return query
}
