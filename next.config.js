/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		NEXT_PUBLIC_BASE_URL: 'https://api.anilibria.tv/v3',
		NEXT_PUBLIC_VIDEO_URL: 'https://cache.libria.fun',
		NEXT_PUBLIC_IMG_URL: 'https://static-libria.weekstorm.one',
	},
}

module.exports = nextConfig
