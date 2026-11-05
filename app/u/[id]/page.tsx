// roomieng.com/u/:id — a shared Roomie profile

import type { Metadata } from 'next';
import AppButtons from '@/components/share/AppButtons';
import ShareFrame, { NotAvailable } from '@/components/share/ShareFrame';
import { SITE_URL, displayName, getSharedUser, place, sized } from '@/lib/share';

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const user = await getSharedUser(id);
  if (!user) return { title: 'Roomie', robots: { index: false } };

  const name = displayName(user);
  const where = place(user.city, user.state);
  const title = `${name} on Roomie`;
  const description = user.bio || `${name} is looking for a roommate${where ? ` in ${where}` : ''}. See their profile on Roomie.`;
  const image = sized(user.photo, 600);

  return {
    title,
    description,
    robots: { index: false },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/u/${id}`,
      type: 'profile',
      images: image ? [{ url: image }] : [{ url: `${SITE_URL}/roomie-logo-transparent-cropped.png` }],
    },
    twitter: { card: image ? 'summary_large_image' : 'summary', title, description },
  };
}

export default async function SharedProfilePage({ params }: Props) {
  const { id } = await params;
  const user = await getSharedUser(id);
  if (!user) return <NotAvailable what="profile" />;

  const name = displayName(user);
  const facts = [user.age && `${user.age}`, user.occupation, place(user.city, user.state)].filter(Boolean);

  return (
    <ShareFrame>
      <div className="p-6">
        <div className="flex items-center gap-4">
          {user.photo ? (
            <img src={sized(user.photo, 300)} alt="" className="h-20 w-20 flex-shrink-0 rounded-full object-cover" />
          ) : (
            <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-teal-50 text-2xl font-semibold text-[#0b5560]">
              {user.firstName.charAt(0)}
            </div>
          )}
          <div className="min-w-0">
            <h1 className="flex items-center gap-1.5 text-xl font-semibold text-slate-900">
              <span className="truncate">{name}</span>
              {user.verified && (
                <span className="rounded-full bg-teal-50 px-2 py-0.5 text-[11px] font-semibold text-[#0b5560]">Verified</span>
              )}
            </h1>
            {facts.length > 0 && <p className="mt-0.5 text-[14px] text-slate-500">{facts.join(' · ')}</p>}
          </div>
        </div>

        {user.limited ? (
          <p className="mt-5 text-[14px] leading-relaxed text-slate-600">
            {user.firstName} only shows their full profile to people on Roomie. Open the app to see more and connect.
          </p>
        ) : (
          <>
            {user.bio && <p className="mt-5 text-[15px] leading-relaxed text-slate-700">{user.bio}</p>}
            {user.interests.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {user.interests.map((interest) => (
                  <span key={interest} className="rounded-full bg-slate-100 px-3 py-1 text-[13px] text-slate-700">
                    {interest}
                  </span>
                ))}
              </div>
            )}
          </>
        )}

        <div className="mt-6 rounded-xl bg-slate-50 p-4 text-[14px] leading-relaxed text-slate-600">
          See {user.firstName}&apos;s full profile, how well you match and their lifestyle, and send a request on the Roomie app.
        </div>

        <div className="mt-5">
          <AppButtons path={`u/${user.id}`} label={`See ${user.firstName} in the Roomie app`} />
        </div>
      </div>
    </ShareFrame>
  );
}
