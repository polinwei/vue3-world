import enUS from '../translations/en-US'
import zhTW from '../translations/zh-TW'

const supported = ['en-US', 'zh-TW']
let locale = 'en-US'

try {
  // get browser default language
  //const { 0: browserLang } = navigator.language.split('-')
  const browserLang = navigator.language

  if (supported.includes(browserLang)) locale = browserLang
} catch (e) {
  console.log(e)
}

export default {
  // current locale
  locale,

  // when translation is not available fallback to that locale
  fallbackLocale: 'en-US',

  // availabled locales for user selection
  availableLocales: [
    {
      code: 'en-US',
      flag: 'us',
      label: 'English',
      messages: enUS,
    },
    {
      code: 'zh-TW',
      flag: 'tw',
      label: '中文-繁',
      messages: zhTW,
    },
  ],
}
