import type { ReactNode } from 'react';

type PolicySection = {
  title: string;
  content: ReactNode;
};

export default function PolicyPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: PolicySection[];
}) {
  return (
    <main className="min-h-screen bg-[#f7f1e6] text-[#2a2020]">
      <header className="bg-[#4a0f24] px-5 py-16 text-white sm:py-24">
        <div className="container-premium">
          <a href="/" className="text-xs uppercase tracking-[0.2em] text-[#e2bd78] hover:text-white">
            ← Back to website
          </a>
          <p className="mt-12 text-xs font-semibold uppercase tracking-[0.28em] text-[#e2bd78]">
            SAM Embroidery &amp; Maggam Designs
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-none sm:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/75">{intro}</p>
        </div>
      </header>

      <article className="container-premium max-w-4xl py-12 sm:py-20">
        <p className="mb-10 text-sm text-[#5c4d4d]">Last updated: 2 October 2026</p>
        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-3xl font-semibold text-[#4a1525]">{section.title}</h2>
              <div className="mt-3 text-base leading-7 text-[#4c3e3e]">{section.content}</div>
            </section>
          ))}
        </div>
        <div className="mt-14 border-t border-[#b58a45]/30 pt-8 text-sm text-[#6c5b5b]">
          Questions? Contact us at{' '}
          <a className="font-semibold text-[#781b35] underline" href="mailto:samembroiderydesigns@gmail.com">
            samembroiderydesigns@gmail.com
          </a>
          .
        </div>
      </article>
    </main>
  );
}
