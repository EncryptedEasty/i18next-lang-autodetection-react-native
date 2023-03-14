### i18next-lang-autodetection-react-native ![npm](https://img.shields.io/npm/v/i18next-lang-autodetection-react-native?style=flat-square) ![NPM](https://img.shields.io/npm/l/i18next-lang-autodetection-react-native?style=flat-square)

An i18next plugin to autodetect a system's language in React Native, written in TypeScript.

---

#### Installation
You can install the plugin using either `npm` or `yarn`:

```bash
npm install i18next-lang-autodetection-react-native
```
```bash
yarn add i18next-lang-autodetection-react-native
```

#### Usage
Import it and add it to your i18next instance using the use() method.

```typescript
import i18next from "i18next";
import languageDetector from "i18next-lang-autodetection-react-native";

i18next.use(languageDetector).init({
  // ...
});
```

Once you've added the languageDetector to your i18next instance, it will automatically detect the system's language and use it as the default language. You can also specify a fallback language in case the language detection fails.

#### Example

###### i18n.ts

```ts
import i18next from "i18next";
import languageDetector from "i18next-lang-autodetection-react-native"; // Import the plugin
import { initReactI18next } from "react-i18next";

// Your language files would be imported here

i18next
  .use(languageDetector) // Use the Language detector
  .use(initReactI18next)
  .init({
    resources,
    compatibilityJSON: "v3",
    fallbackLng: "en", // Specify a fallback language
    supportedLngs: ["en", "it"],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
```


#### License

This library is licensed under the ![MIT License](https://github.com/EncryptedEasty/i18next-lang-autodetection-react-native/blob/main/LICENSE).
