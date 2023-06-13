export const i18n = {
  defaultLocale: "nb",
  locales: ["nb", "en"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
