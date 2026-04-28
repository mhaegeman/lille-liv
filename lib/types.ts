export type VenueCategory =
  | 'cafe'
  | 'playground'
  | 'indoor_play'
  | 'cinema'
  | 'library'
  | 'swimming'
  | 'theatre'
  | 'museum'
  | 'event'
  | 'nature'
  | 'gymnasium';

export type Neighbourhood =
  | 'norrebro'
  | 'osterbro'
  | 'vesterbro'
  | 'frederiksberg'
  | 'indre_by'
  | 'amager'
  | 'valby'
  | 'nordvest'
  | 'bispebjerg'
  | 'sydhavn'
  | 'christianshavn'
  | 'other';

export type MilestoneType =
  | 'first_smile'
  | 'first_laugh'
  | 'first_word'
  | 'first_steps'
  | 'sat_up_alone'
  | 'first_tooth'
  | 'slept_through'
  | 'first_food'
  | 'first_haircut'
  | 'started_vuggestue'
  | 'started_bornehave'
  | 'custom';

import type { OpeningHours } from './utils';

export interface Venue {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: VenueCategory;
  address: string;
  lat: number;
  lng: number;
  ageMinMonths: number;
  ageMaxMonths: number;
  photos: string[];
  rating: number | null;
  website: string | null;
  phone: string | null;
  tags: string[];
  indoor: boolean;
  priceLevel: number;
  openingHours: OpeningHours | null;
  neighbourhood: Neighbourhood;
}

export interface DiscoverFilters {
  ageMonths?: number;
  categories: VenueCategory[];
  neighbourhoods: Neighbourhood[];
  indoor?: 'indoor' | 'outdoor' | 'any';
  openNow?: boolean;
  query?: string;
}

export const ALL_CATEGORIES = [
  'cafe',
  'playground',
  'indoor_play',
  'library',
  'swimming',
  'theatre',
  'museum',
  'cinema',
  'nature',
  'gymnasium',
  'event',
] as const satisfies readonly VenueCategory[];

export const ALL_NEIGHBOURHOODS = [
  'norrebro',
  'osterbro',
  'vesterbro',
  'frederiksberg',
  'indre_by',
  'amager',
  'valby',
  'nordvest',
  'bispebjerg',
  'sydhavn',
  'christianshavn',
] as const satisfies readonly Neighbourhood[];

export const MILESTONE_TYPES = [
  'first_smile',
  'first_laugh',
  'first_word',
  'first_steps',
  'sat_up_alone',
  'first_tooth',
  'slept_through',
  'first_food',
  'first_haircut',
  'started_vuggestue',
  'started_bornehave',
  'custom',
] as const satisfies readonly MilestoneType[];

export const CATEGORY_ICON: Record<VenueCategory, string> = {
  cafe: '☕',
  playground: '🛝',
  indoor_play: '🧸',
  cinema: '🎬',
  library: '📚',
  swimming: '🏊',
  theatre: '🎭',
  museum: '🏛️',
  event: '🎉',
  nature: '🌿',
  gymnasium: '🤸',
};
