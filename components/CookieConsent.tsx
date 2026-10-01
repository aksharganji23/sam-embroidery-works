'use client';

import { useEffect, useState } from 'react';

const COOKIE_CONSENT_KEY = 'sam-embroidery-cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      setVisible(window.localStorage.getItem(COOKIE_CONSENT_KEY) === null);
    } catch {
      setVisible(true);
    }
  }, []);

  const saveConsent = (value: 'accepted' | 'rejected') => {
    try {
      window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
    } catch {
      // The banner can still be dismissed when storage is unavailable.
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      role="dialog"
      aria-label="Cookie consent"
      aria-describedby="cookie-consent-description"
      className="fixed inset-x-3 bottom-3 z-[70] rounded-lg border border-[#b58a45]/30 bg-[#fffdf8] p-4 text-[#2a2020] shadow-[0_12px_40px_rgba(43,9,21,.2)] sm:inset-x-auto sm:right-5 sm:max-w-md"
    >
      <h2 className="font-display text-xl font-semibold text-[#4a1525]">
        Cookies on this website
      </h2>
      <p id="cookie-consent-description" className="mt-2 text-sm leading-5 text-[#5f5050]">
        This static site does not use advertising or analytics cookies. We use your browser&apos;s localStorage only to remember whether you accepted or rejected non-essential cookies; no preference is sent to us. Clear this site&apos;s storage to choose again. Read our{' '}
        <a href="/cookies-policy/" className="font-semibold text-[#781b35] underline">
          Cookies Policy
        </a>{' '}
        for details.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => saveConsent('accepted')}
          className="rounded-full bg-[#5a1027] px-4 py-2 text-xs font-semibold text-white hover:bg-[#781b35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b58a45]"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => saveConsent('rejected')}
          className="rounded-full border border-[#5a1027]/30 px-4 py-2 text-xs font-semibold text-[#5a1027] hover:bg-[#f7f1e6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b58a45]"
        >
          Reject non-essential
        </button>
      </div>
    </aside>
  );
}
