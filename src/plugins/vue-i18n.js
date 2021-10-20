import config from '../configs'
import { createI18n } from 'vue-i18n'

/**
 * Vue 3 Translations
 * https://vue-i18n.intlify.dev/installation.html#npm
 */

// 1. Ready translated locale messages
// The structure of the locale message is the hierarchical object structure with each locale as the top property
const { locale, availableLocales, fallbackLocale } = config.locales
const messages = {}

availableLocales.forEach((l) => {
  messages[l.code] = l.messages
})

// 2. Create i18n instance with options
export const i18n = createI18n({
  locale: locale, // set locale
  fallbackLocale: fallbackLocale, // set fallback locale
  messages, // set locale messages
})

i18n.locales = availableLocales

export default i18n
