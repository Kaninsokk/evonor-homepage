import { useTranslation } from "react-i18next";

const STAT_KEYS = ["based", "founded", "structure", "model"] as const;

export default function About() {
  const { t } = useTranslation();
  const body = t("about.body", { returnObjects: true }) as string[];

  return (
    <section id="about" className="border-t border-rule/70 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-20">
          <div>
            <p className="text-[12.5px] uppercase tracking-[0.18em] text-mute">
              {t("about.eyebrow")}
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.01em] text-ink md:text-4xl">
              {t("about.title")}
            </h2>
            <div className="mt-6 space-y-5 text-[16.5px] leading-relaxed text-mute">
              {body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-px self-start overflow-hidden rounded-2xl border border-rule bg-rule">
            {STAT_KEYS.map((key) => (
              <div key={key} className="bg-white p-6">
                <dt className="text-[11.5px] uppercase tracking-widest text-mute">
                  {t(`about.stats.${key}.label`)}
                </dt>
                <dd className="mt-2 text-[17px] font-medium tracking-tight text-ink">
                  {t(`about.stats.${key}.value`)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
