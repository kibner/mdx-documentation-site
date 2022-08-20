import React from "react"
import { useSiteMetadataSEOQuery } from "../static-queries/use-site-metadata-seo-query"

export const Seo = ({ title, description, lang, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    lang: defaultLang,
    image,
  } = useSiteMetadataSEOQuery()

  const seo = {
    title: defaultTitle ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    lang: lang || defaultLang,
    image: `${image}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {/*<meta name="theme-color" content="#424242">*/}
      {children}
    </>
  )
}
