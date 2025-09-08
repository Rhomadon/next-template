import { ThemeToggle } from "@/components/theme-toggle";
import { LocaleSwitch } from "@/components/locale-switch";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">
        {locale === "en" ? "Hello!" : "Halo!"}
      </h1>
      <div className="flex gap-2">
        <ThemeToggle />
        <LocaleSwitch />
      </div>
    </main>
  );
}
