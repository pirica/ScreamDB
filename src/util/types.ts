import {Item, OfferType} from "../generated/graphql";

export interface GameCardData {
	id: string,
	title: string,
	namespace: string
	image?: string | null,
	creationDate: Date
}

export interface OfferRowData {
	id: string,
	title: string,
	offerType: OfferType
	items: Pick<Item, 'id' | 'title'>[]
	image?: string,
}

export type ValidLanguage = 'en' | 'ru'
export type ValidSortOption = 'title' | 'creationDate'
export type ValidSortDirection = 'ASC' | 'DESC'
