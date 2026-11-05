// Page frame for shared-link pages: logo, a card for the content, and a short footer.

import Link from 'next/link';

export default function ShareFrame({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-6 sm:py-10">
      <div className="mx-auto w-full max-w-md">
        <Link href="/" className="mb-6 flex items-center gap-2">
          <img src="/roomie-logo-transparent-cropped.png" alt="" className="h-7 w-auto" />
          <span className="text-lg font-bold text-[#0b5560]">Roomie</span>
        </Link>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">{children}</div>
        <p className="mt-6 text-center text-[13px] text-slate-500">
          Roomie helps you find a roommate you can trust, and a place to share, in Nigeria.{' '}
          <Link href="/" className="font-medium text-primary-dark underline">
            Learn more
          </Link>
        </p>
      </div>
    </main>
  );
}

export function NotAvailable({ what }: { what: string }) {
  return (
    <ShareFrame>
      <div className="p-6 text-center">
        <h1 className="text-lg font-semibold text-slate-900">This {what} isn&apos;t available</h1>
        <p className="mt-2 text-[14px] leading-relaxed text-slate-500">
          It may have been removed or made private. There are plenty more on Roomie.
        </p>
        <Link
          href="/"
          className="mt-5 inline-block rounded-xl bg-primary px-5 py-3 text-[15px] font-semibold text-white hover:bg-primary-dark"
        >
          Go to Roomie
        </Link>
      </div>
    </ShareFrame>
  );
}
