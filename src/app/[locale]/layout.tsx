import { ReactNode } from "react"
import { I18nProvider } from "@/lib/i18n"

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  let messages: Record<string, string>
  try {
    messages = (await import(`@/messages/${locale}.json`)).default
  } catch {
    messages = (await import("@/messages/en.json")).default
  }

  return (
    <I18nProvider messages={messages}>
      <section lang={locale}>
        {children}
      </section>
    </I18nProvider>
  )
}
