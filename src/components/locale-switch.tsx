"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function LocaleSwitch() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.startsWith("/id") ? "id" : "en";

  const switchLocale = () => {
    const newLocale = currentLocale === "en" ? "id" : "en";
    router.push(pathname.replace(/^\/(en|id)/, `/${newLocale}`));
  };

  return (
    <Button variant="outline" onClick={switchLocale}>
      {currentLocale === "en" ? "🇬🇧 English" : "🇮🇩 Bahasa"}
    </Button>
  );
}
