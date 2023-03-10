### i18next-lang-autodetection-react-native

An i18next plugin to autodetect a system's language in react native

---

#### Example
###### i18n.ts
```ts
import i18n from "i18next";
import languageDetector from "./language-detector";
import { initReactI18next } from "react-i18next";

// Translations
import { en_US, it_IT } from "path/to/lang";

const resources = {
  en: en_US,
  it: it_IT,
};

i18n
  .use(languageDetector) // Use the Language detector
  .use(initReactI18next)
  .init({
    resources,
    compatibilityJSON: "v3",
    fallbackLng: "en", // Fallback Language if the Language Detector fails
    supportedLngs: ["en", "it"],
    interpolation: {
      escapeValue: false
    },
  });

export default i18n;


```
