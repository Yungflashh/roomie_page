// lib/share.ts
//
// Data for the pages people land on from a shared Roomie link (roomieng.com/u/:id and /l/:id).
// The backend only returns what a stranger may see.

export const SITE_URL = 'https://roomieng.com';
const API_URL = process.env.ROOMIE_API_URL || 'https://roomieupdatedbe.pxxlspace.cv/api/v1';

export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.roomieng.app';
// Set NEXT_PUBLIC_APP_STORE_URL on Vercel once the iPhone app is live
export const APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL || '';

export interface SharedUser {
  id: string;
  firstName: string;
  lastInitial?: string;
  photo?: string;
  verified: boolean;
  limited: boolean;
  city?: string;
  state?: string;
  age?: string;
  occupation?: string;
  bio?: string;
  interests: string[];
}

export interface SharedListing {
  id: string;
  title: string;
  description?: string;
  type: string;
  price: number;
  currency: string;
  city?: string;
  state?: string;
  photos: string[];
  bedrooms?: number;
  bathrooms?: number;
  furnished: boolean;
  amenities: string[];
  available: boolean;
  lister: { firstName: string; verified: boolean };
}

async function get<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API_URL}${path}`, { next: { revalidate: 300 } });
    if (!res.ok) return null;
    const body = await res.json();
    return (body?.data as T) ?? null;
  } catch {
    return null;
  }
}

const ID = /^[a-f0-9]{24}$/i;

export const getSharedUser = (id: string) => (ID.test(id) ? get<SharedUser>(`/share/user/${id}`) : Promise.resolve(null));
export const getSharedListing = (id: string) => (ID.test(id) ? get<SharedListing>(`/share/listing/${id}`) : Promise.resolve(null));

export const displayName = (u: Pick<SharedUser, 'firstName' | 'lastInitial'>) =>
  u.lastInitial ? `${u.firstName} ${u.lastInitial}.` : u.firstName;

export const place = (city?: string, state?: string) => [city, state].filter(Boolean).join(', ');

export const formatPrice = (price: number, currency: string) => {
  const symbol = currency === 'NGN' ? '₦' : `${currency} `;
  return `${symbol}${Math.round(price).toLocaleString('en-NG')}`;
};

/** Cloudinary images: ask for a sensible size instead of the original upload */
export const sized = (url: string | undefined, width: number) =>
  url && url.includes('/image/upload/') ? url.replace('/image/upload/', `/image/upload/w_${width},c_limit,q_auto,f_auto/`) : url;
