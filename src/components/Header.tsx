import { useTranslation } from "react-i18next";
import Logo from "./Logo";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-30 border-b border-rule/70 bg-paper/80 backdrop-blur supports-[backdrop-filter]:bg-paper/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="shrink-0">
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-mute md:flex">
          <a className="transition hover:text-ink" href="#services">
            {t("nav.services")}
          </a>
          <a className="transition hover:text-ink" href="#work">
            {t("nav.work")}
          </a>
          <a className="transition hover:text-ink" href="#about">
            {t("nav.about")}
          </a>
          <a className="transition hover:text-ink" href="#contact">
            {t("nav.contact")}
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex h-9 items-center rounded-full bg-ink px-4 text-[13px] font-medium text-paper transition hover:bg-ink-soft"
        >
          {t("nav.getInTouch")}
        </a>
      </div>
    </header>
  );
}
