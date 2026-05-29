import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="border-t border-rule/70">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <div>
            <p className="text-[12.5px] uppercase tracking-[0.18em] text-mute">
              {t("contact.eyebrow")}
            </p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.02em] text-ink md:text-5xl">
              {t("contact.title")}
            </h2>
            <p className="mt-5 max-w-md text-[16.5px] leading-relaxed text-mute">
              {t("contact.subtitle")}
            </p>
            <a
              href={t("contact.ctaHref")}
              className="mt-8 inline-flex h-11 items-center rounded-full bg-ink px-5 text-sm font-medium text-paper transition hover:bg-ink-soft"
            >
              {t("contact.ctaLabel")}
            </a>
          </div>

          <dl className="grid gap-px self-start overflow-hidden rounded-2xl border border-rule bg-rule">
            <div className="bg-white p-6">
              <dt className="text-[11.5px] uppercase tracking-widest text-mute">
                {t("contact.emailLabel")}
              </dt>
              <dd className="mt-2 font-mono text-[15px] text-ink">
                <a
                  className="underline-offset-4 hover:underline"
                  href={`mailto:${t("contact.emailValue")}`}
                >
                  {t("contact.emailValue")}
                </a>
              </dd>
            </div>
            <div className="bg-white p-6">
              <dt className="text-[11.5px] uppercase tracking-widest text-mute">
                {t("contact.locationLabel")}
              </dt>
              <dd className="mt-2 text-[15.5px] text-ink">
                {t("contact.locationValue")}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
