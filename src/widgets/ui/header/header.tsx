import { LogoIcon } from '@/images/LogoIcon'
import { SearchIcon } from '@/images/SearchIcon'
import {
	Button,
	Image,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

export const Header: React.FC = () => {
	return (
		<Navbar
			shouldHideOnScroll
			maxWidth='xl'
			classNames={{ wrapper: 'p-0' }}
			className='bg-dark'
		>
			<NavbarBrand className='gap-1'>
				<NavbarItem>
					<Link href='/'>
						<LogoIcon size={30} fill='#fff' />
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Button as={Link} variant='light' href='/' size='sm'>
						КАТАЛОГ
					</Button>
				</NavbarItem>
				<NavbarItem>
					<Button as={Link} variant='light' href='/' size='sm'>
						ТОПЫ
					</Button>
				</NavbarItem>
				<NavbarItem>
					<Button
						variant='light'
						size='sm'
						startContent={<SearchIcon size={18} fill='#fff' />}
					>
						ПОИСК
					</Button>
				</NavbarItem>
			</NavbarBrand>
			<NavbarContent justify='end'>
				<NavbarItem>
					<Button
						variant='light'
						isIconOnly
						className='rounded-full overflow-hidden'
					>
						<Image
							src='https://remanga.org/media/users/64148/avatar_3HsytPG.jpg'
							width='100'
							height='100'
						/>
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	)
}
