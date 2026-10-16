import { useEffect } from 'react'
import { SITE } from '../config/site'

function setMeta(selector: string, attr: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector)
  if (!el) {
    const [, tag, key, name] = selector.match(/^(\w+)\[(\w+)="([^"]+)"\]$/) ?? []
    if (!tag) return
    el = document.createElement(tag) as HTMLMetaElement
    el.setAttribute(key, name)
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

/** Título, descripción, canonical y Open Graph únicos por página. */
export function usePageMeta({ title, description, path, noindex = false }: { title: string; description: string; path: string; noindex?: boolean }) {
  useEffect(() => {
    const url = `${SITE.url}${path}`
    document.title = title
    setMeta('meta[name="description"]', 'content', description)
    setMeta('link[rel="canonical"]', 'href', url)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)
    setMeta('meta[name="robots"]', 'content', noindex ? 'noindex' : 'index, follow')
  }, [title, description, path, noindex])
}
