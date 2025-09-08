import { ThemeToggle } from "@/components/theme-toggle";
import { LocaleSwitch } from "@/components/locale-switch";

export default function Page({ params }: { params: { locale: string } }) {
  const { locale } = params;

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
