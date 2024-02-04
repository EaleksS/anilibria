import { authAnilibria } from '@/service/anilibria.service'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'

export const useUserQuery = (session: string) => {
	const query = useQuery({
		queryKey: ['user'],
		queryFn: () => authAnilibria.user(session),
		refetchOnWindowFocus: true,
		enabled: !!session,
		throwOnError: err => {
			authAnilibria.logout()

			toast.warning(err.message)

			throw new Error(err.message)
		},
	})

	return query
}
