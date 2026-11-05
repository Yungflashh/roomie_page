'use client';

// "Open in Roomie" plus store buttons for shared-link pages.
// Android: an intent link opens the app if it's installed, otherwise the Play Store.
// iPhone: tries the roomie:// link; if nothing happens, the download buttons are right there.

import { useEffect, useState } from 'react';
import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/share';

type Platform = 'android' | 'ios' | 'other';

export default function AppButtons({ path, label }: { path: string; label: string }) {
  const [platform, setPlatform] = useState<Platform>('other');

  useEffect(() => {
    const ua = navigator.userAgent || '';
    if (/android/i.test(ua)) setPlatform('android');
    else if (/iphone|ipad|ipod/i.test(ua)) setPlatform('ios');
  }, []);

  const openHref =
    platform === 'android'
      ? `intent://${path}#Intent;scheme=roomie;package=com.roomieng.app;S.browser_fallback_url=${encodeURIComponent(PLAY_STORE_URL)};end`
      : `roomie://${path}`;

  return (
    <div className="flex flex-col gap-3">
      {platform !== 'other' && (
        <a
          href={openHref}
          className="block w-full rounded-xl bg-primary px-5 py-3.5 text-center text-[15px] font-semibold text-white hover:bg-primary-dark"
        >
          {label}
        </a>
      )}
      <div className="flex flex-col gap-2 sm:flex-row">
        {platform !== 'ios' && (
          <a
            href={PLAY_STORE_URL}
            className="flex-1 rounded-xl border border-slate-200 bg-white px-5 py-3 text-center text-[14px] font-semibold text-slate-800 hover:bg-slate-50"
          >
            Get it on Google Play
          </a>
        )}
        {platform !== 'android' &&
          (APP_STORE_URL ? (
            <a
              href={APP_STORE_URL}
              className="flex-1 rounded-xl border border-slate-200 bg-white px-5 py-3 text-center text-[14px] font-semibold text-slate-800 hover:bg-slate-50"
            >
              Download on the App Store
            </a>
          ) : (
            <span className="flex-1 rounded-xl border border-dashed border-slate-200 px-5 py-3 text-center text-[14px] text-slate-500">
              iPhone app coming soon
            </span>
          ))}
      </div>
    </div>
  );
}
