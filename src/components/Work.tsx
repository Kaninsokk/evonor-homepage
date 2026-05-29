import { useTranslation } from "react-i18next";

const KEYS = ["lokalyx", "flowhook", "dishnest", "consulting"] as const;

export default function Work() {
  const { t } = useTranslation();

  return (
    <section id="work" className="border-t border-rule/70">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="max-w-2xl">
          <p className="text-[12.5px] uppercase tracking-[0.18em] text-mute">
            {t("work.eyebrow")}
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.01em] text-ink md:text-4xl">
            {t("work.title")}
          </h2>
          <p className="mt-4 text-[16.5px] leading-relaxed text-mute">
            {t("work.subtitle")}
          </p>
        </div>

        <ul className="mt-12 divide-y divide-rule border-y border-rule">
          {KEYS.map((key) => (
            <li
              key={key}
              className="grid gap-2 py-7 md:grid-cols-[1fr_auto_2fr] md:items-baseline md:gap-10"
            >
              <h3 className="text-lg font-medium tracking-tight text-ink">
                {t(`work.items.${key}.name`)}
              </h3>
              <p className="font-mono text-[11.5px] uppercase tracking-widest text-mute md:justify-self-start">
                {t(`work.items.${key}.category`)}
              </p>
              <p className="text-[15.5px] leading-relaxed text-mute">
                {t(`work.items.${key}.body`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
