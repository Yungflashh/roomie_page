// roomieng.com/l/:id — a shared Roomie listing

import type { Metadata } from 'next';
import AppButtons from '@/components/share/AppButtons';
import ShareFrame, { NotAvailable } from '@/components/share/ShareFrame';
import { SITE_URL, formatPrice, getSharedListing, place, sized } from '@/lib/share';

type Props = { params: Promise<{ id: string }> };

const TYPE_LABEL: Record<string, string> = { apartment: 'Apartment', house: 'House', condo: 'Flat', room: 'Room' };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const listing = await getSharedListing(id);
  if (!listing) return { title: 'Roomie', robots: { index: false } };

  const where = place(listing.city, listing.state);
  const title = `${listing.title} · ${formatPrice(listing.price, listing.currency)}/year`;
  const description =
    listing.description || `${TYPE_LABEL[listing.type] || 'Place'}${where ? ` in ${where}` : ''}, listed on Roomie.`;
  const image = sized(listing.photos[0], 1200);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/l/${id}`,
      type: 'website',
      images: image ? [{ url: image }] : [{ url: `${SITE_URL}/roomie-logo-transparent-cropped.png` }],
    },
    twitter: { card: image ? 'summary_large_image' : 'summary', title, description },
  };
}

export default async function SharedListingPage({ params }: Props) {
  const { id } = await params;
  const listing = await getSharedListing(id);
  if (!listing) return <NotAvailable what="listing" />;

  const where = place(listing.city, listing.state);
  const facts = [
    TYPE_LABEL[listing.type] || listing.type,
    listing.bedrooms ? `${listing.bedrooms} bed` : null,
    listing.bathrooms ? `${listing.bathrooms} bath` : null,
    listing.furnished ? 'Furnished' : null,
  ].filter(Boolean);
  const [cover, ...more] = listing.photos;

  return (
    <ShareFrame>
      {cover && <img src={sized(cover, 900)} alt="" className="aspect-[4/3] w-full object-cover" />}
      {more.length > 0 && (
        <div className="flex gap-1.5 overflow-x-auto px-1.5 pt-1.5">
          {more.map((photo) => (
            <img key={photo} src={sized(photo, 300)} alt="" className="h-20 w-28 flex-shrink-0 rounded-lg object-cover" />
          ))}
        </div>
      )}

      <div className="p-6">
        {!listing.available && (
          <p className="mb-3 inline-block rounded-full bg-amber-50 px-3 py-1 text-[12px] font-semibold text-amber-700">
            No longer available
          </p>
        )}
        <h1 className="text-xl font-semibold text-slate-900">{listing.title}</h1>
        <p className="mt-1 text-[14px] text-slate-500">{[where, ...facts].filter(Boolean).join(' · ')}</p>
        <p className="mt-3 text-2xl font-semibold text-[#0b5560]">
          {formatPrice(listing.price, listing.currency)}
          <span className="text-[14px] font-normal text-slate-500"> / year</span>
        </p>

        {listing.description && <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{listing.description}</p>}

        {listing.amenities.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {listing.amenities.map((a) => (
              <span key={a} className="rounded-full bg-slate-100 px-3 py-1 text-[13px] capitalize text-slate-700">
                {a.replace(/_/g, ' ')}
              </span>
            ))}
          </div>
        )}

        <p className="mt-5 text-[13px] text-slate-500">
          Listed by {listing.lister.firstName}
          {listing.lister.verified ? ' (verified)' : ''}
        </p>

        <div className="mt-4 rounded-xl bg-slate-50 p-4 text-[14px] leading-relaxed text-slate-600">
          See every photo and message {listing.lister.firstName} on the Roomie app.
        </div>

        <div className="mt-5">
          <AppButtons path={`l/${listing.id}`} label="Open this listing in Roomie" />
        </div>
      </div>
    </ShareFrame>
  );
}
