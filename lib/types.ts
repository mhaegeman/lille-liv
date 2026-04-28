export type OpeningHours = Partial<
  Record<'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun', [string, string] | null>
>;

export type PriceLevel = 'free' | 'low' | 'medium' | 'high';

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
] as const;
export type VenueCategory = (typeof ALL_CATEGORIES)[number];

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
] as const;
export type Neighbourhood = (typeof ALL_NEIGHBOURHOODS)[number] | 'other';

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
] as const;
export type MilestoneType = (typeof MILESTONE_TYPES)[number];

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
  priceLevel: PriceLevel;
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
