"use client";

import React, { createContext, useContext } from "react";

type Messages = Record<string, string>;

const I18nContext = createContext<Messages | null>(null);

export function I18nProvider({
  messages,
  children,
}: {
  messages: Messages;
  children: React.ReactNode;
}) {
  return (
    <I18nContext.Provider value={messages}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const messages = useContext(I18nContext);
  if (!messages) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return (key: string) => messages[key] ?? key;
}
