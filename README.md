### i18next-lang-autodetection-react-native ![npm](https://img.shields.io/npm/v/i18next-lang-autodetection-react-native?style=flat-square) ![NPM](https://img.shields.io/npm/l/i18next-lang-autodetection-react-native?style=flat-square)

An i18next plugin to autodetect a system's language in react native, written in typescript

---

#### How to use

Import the plugin with

```ts
import languageDetector from "i18next-lang-autodetection-react-native";
```

and use it with

```ts
i18next.use(languageDetector).init({
  // ...
});
```

You're done! The plugin will automatically detect the system's language and use it as the default language.

#### Example

###### i18n.ts

```ts
import i18n from "i18next";
import languageDetector from "i18next-lang-autodetection-react-native"; // Import the Language Detector
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
      escapeValue: false,
    },
  });

export default i18n;
```

#### License

MIT
