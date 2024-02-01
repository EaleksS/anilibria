import { MainSlider } from '@/widgets/ui/main-slider/MainSlider'
import { MainTitle } from '@/widgets/ui/main-title/MainTitle'

export default function Home() {
	return (
		<>
			<main className='max-w-7xl mx-auto'>
				<MainTitle />
			</main>
			<MainSlider />
			<main className='max-w-7xl mx-auto'></main>
		</>
	)
}
