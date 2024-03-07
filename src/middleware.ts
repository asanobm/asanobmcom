import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
 


export default async function middleware(req: any, res: any, next: any) {
  let locales = ['ko-KR', 'ja-JP', 'en-US']
  let defaultLocale = 'ko-KR'
  let headers = { 'accept-language': 'en-US,en;q=0.5' }
  let languages = new Negotiator({ headers }).languages()
  let locale = match(languages, locales, defaultLocale)
  req.locale = locale
  // next()
}