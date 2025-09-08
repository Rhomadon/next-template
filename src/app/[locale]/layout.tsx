import { ReactNode } from "react"
import { I18nProvider } from "@/lib/i18n"
import enMessages from "@/messages/en.json"
import idMessages from "@/messages/id.json"

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const messages = locale === "id" ? idMessages : enMessages

  return (
    <I18nProvider messages={messages}>
      <section lang={locale}>
        {children}
      </section>
    </I18nProvider>
  )
}
