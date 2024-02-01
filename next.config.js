/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		NEXT_PUBLIC_BASE_URL: 'https://api.anilibria.tv/v3',
		NEXT_PUBLIC_ORIGIN_URL: 'https://anilibria-dun.vercel.app/',
	},
}

module.exports = nextConfig
