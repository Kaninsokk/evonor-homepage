import { useTranslation } from "react-i18next";

const KEYS = ["consulting", "delivery", "platforms", "ai"] as const;

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="border-t border-rule/70 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="max-w-2xl">
          <p className="text-[12.5px] uppercase tracking-[0.18em] text-mute">
            {t("services.eyebrow")}
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.01em] text-ink md:text-4xl">
            {t("services.title")}
          </h2>
          <p className="mt-4 text-[16.5px] leading-relaxed text-mute">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-rule bg-rule sm:grid-cols-2">
          {KEYS.map((key, i) => (
            <article
              key={key}
              className="group relative bg-white p-8 transition hover:bg-paper md:p-10"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[11px] tracking-widest text-mute">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-medium tracking-tight text-ink">
                  {t(`services.items.${key}.title`)}
                </h3>
              </div>
              <p className="mt-3 text-[15.5px] leading-relaxed text-mute">
                {t(`services.items.${key}.body`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
