import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language");
  const defaultLocale = acceptLanguage?.startsWith("id") ? "id" : "en";

  redirect(`/${defaultLocale}`);
}
