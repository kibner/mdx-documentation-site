import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Typography } from "@material-ui/core"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import MdxCustomizedComponents from "./configs/mdx-customized-components"
import MdxShortcodes from "./configs/mdx-shortcodes"
import BuildNavigationTree from "../components/helpers/build-navigation-tree"
import MdxDivider from "../components/mdx/native-elements/mdx-divider"
import TableOfContents from "../components/table-of-contents/table-of-contents"
import Breadcrumbs from "../components/breadcrumbs"
import {
  GetBreadcrumbNodes,
  GetNodeById,
} from "../components/helpers/search-navigation-tree"
import { useAllMdxQuery } from "../static-queries/use-all-mdx-query"

export default function PageTemplate({ data: { mdx } }) {
  const mdxProviderComponents = { ...MdxCustomizedComponents, ...MdxShortcodes }
  const allMdx = useAllMdxQuery()
  const navigationTree = BuildNavigationTree(allMdx)
  const currentNode = GetNodeById(navigationTree, mdx.id)
  const breadcrumbNodes = GetBreadcrumbNodes(navigationTree, currentNode)

  return (
    <Layout navigationTree={navigationTree} breadcrumbNodes={breadcrumbNodes}>
      <SEO title={mdx.frontmatter.title} />
      <Breadcrumbs breadcrumbNodes={breadcrumbNodes} />
      <Typography variant={"h2"}>{mdx.frontmatter.title}</Typography>
      <MdxDivider variant={"fullWidth"} />
      <TableOfContents currentNode={currentNode} />
      <MDXProvider components={mdxProviderComponents}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
