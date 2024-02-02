import { format, formatDistanceToNow, getTime } from 'date-fns'
import { ru } from 'date-fns/locale'

// ----------------------------------------------------------------------

export function fDate(date: Date, newFormat: string) {
	const fm = newFormat || 'dd MMM yyyy'

	return date ? format(new Date(date), fm) : ''
}

export function fDateTime(date?: number, newFormat?: string) {
	const fm = newFormat || 'dd MMM yyyy p'

	return date ? format(new Date(date), fm, { locale: ru }) : ''
}

export function fTimestamp(date: Date) {
	return date ? getTime(new Date(date)) : ''
}

export function fToNow(date: Date) {
	return date
		? formatDistanceToNow(new Date(date), {
				addSuffix: true,
				locale: ru,
		  })
		: ''
}
