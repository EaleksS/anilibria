import type { Anime } from '@/types/shikamori/Anime'
import axios from 'axios'

const base_url = process.env.NEXT_PUBLIC_BASE_SHIKAMORI_URL as string

export const getShikamori = {
	async animesID(id: number, sort?: string) {
		const search = sort ?? ''

		return (await axios
			.get(`${base_url}/api/animes/${id}${search}`)
			.then(res => res.data)) as Anime
	},
}
