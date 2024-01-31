import { SVGProps } from 'react'

export type { FeedT } from './FeedT'
export type { TeamT } from './TeamT'
export type { TitleT, TitlesDataT, TitlesT } from './TitleT'
export type { YouTubeDataT, YouTubeT } from './YouTubeT'

export type IconSvgProps = SVGProps<SVGSVGElement> & {
	size?: number
}

export type YearsT = Array<number>

export type GenresT = Array<string>

export type {
	FeedRequestOptionsT,
	TitleChangesRequestOptionsT,
	TitleListRequestOptionsT,
	TitleRandomRequestOptionsT,
	TitleRequestOptionsT,
	TitleScheduleRequestOptionsT,
	TitleSearchAdvancedRequestOptionsT,
	TitleSearchRequestOptionsT,
	TitleUpdateRequestOptionsT,
	TorrentRSSRequestOptionsT,
	TorrentSeed_statsRequestOptionsT,
	YouTubeRequestOptionsT,
} from './RequestOptions'

export type {
	UserFAddDelRequestOptionsT,
	UserFavoritesRequestOptionsT,
	UserRequestOptionsT,
} from './user'
