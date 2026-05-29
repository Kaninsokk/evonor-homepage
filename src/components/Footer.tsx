import { useTranslation } from "react-i18next";
import Logo from "./Logo";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule/70 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-mute md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Logo />
        </div>
        <nav className="flex flex-wrap items-center gap-6">
          <a className="transition hover:text-ink" href="#services">
            {t("footer.links.services")}
          </a>
          <a className="transition hover:text-ink" href="#work">
            {t("footer.links.work")}
          </a>
          <a className="transition hover:text-ink" href="#about">
            {t("footer.links.about")}
          </a>
          <a className="transition hover:text-ink" href="#contact">
            {t("footer.links.contact")}
          </a>
        </nav>
        <p className="text-[13px]">
          © {year} {t("footer.legalName")} · {t("footer.country")}
        </p>
      </div>
    </footer>
  );
}
