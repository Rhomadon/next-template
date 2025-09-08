"use client";

import { useI18n } from "@/lib/i18n";
import { ThemeToggle } from "@/components/theme-toggle";
import { LocaleSwitch } from "@/components/locale-switch";

export default function Page() {
  const t = useI18n();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">{t("greeting")}</h1>
      <p>{t("welcome")}</p>
      <div className="flex gap-2">
        <ThemeToggle />
        <LocaleSwitch />
      </div>
    </main>
  );
}
