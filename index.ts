import { LanguageDetectorModule } from "i18next";
import { Platform, NativeModules } from "react-native";

// Platforms
const Platforms = {
  IOS: "ios",
  ANDROID: "android",
};

// Language Detector Module
const languageDetector: LanguageDetectorModule = {
  type: "languageDetector",
  init: () => {},
  detect: (): string => {
    const locale =
      Platform.OS === Platforms.IOS
        ? NativeModules.SettingsManager.settings.AppleLanguages[0]
        : NativeModules.I18nManager.localeIdentifier;
    return locale.split("_")[0];
  },
  cacheUserLanguage: () => {},
};

export default languageDetector;
