import { LogoIcon } from '@/images/LogoIcon'
import {
	Button,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { UiDropdown } from './Dropdown'
import { SearchButton } from './SearchButton'

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
					<SearchButton />
				</NavbarItem>
			</NavbarBrand>
			<NavbarContent justify='end'>
				<NavbarItem>
					<UiDropdown />
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	)
}
