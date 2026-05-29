import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 h-[420px] bg-[radial-gradient(60%_60%_at_50%_40%,rgba(26,140,186,0.12),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <p className="text-[12.5px] uppercase tracking-[0.18em] text-mute">
          {t("hero.eyebrow")}
        </p>
        <h1 className="mt-5 max-w-3xl text-[40px] leading-[1.05] font-medium tracking-[-0.02em] text-ink md:text-[64px]">
          {t("hero.title")}
        </h1>
        <p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-mute md:text-lg">
          {t("hero.subtitle")}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex h-11 items-center rounded-full bg-ink px-5 text-sm font-medium text-paper transition hover:bg-ink-soft"
          >
            {t("hero.primaryCta")}
          </a>
          <a
            href="#services"
            className="inline-flex h-11 items-center rounded-full border border-rule bg-white px-5 text-sm font-medium text-ink transition hover:border-ink/30"
          >
            {t("hero.secondaryCta")}
          </a>
        </div>
      </div>
    </section>
  );
}
