import 'server-only'
 
const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  ko: () => import('@/dictionaries/ko.json').then((module) => module.default),
  ja: () => import('@/dictionaries/ja.json').then((module) => module.default),
}
export const getDictionary = async (locale: string) => {
  switch (locale) {
    case 'en':
      return await dictionaries.en()
    case 'ko':
      return await dictionaries.ko()
    case 'ja':
      return await dictionaries.ja()
    default:
      return await dictionaries.en()
  }
}
