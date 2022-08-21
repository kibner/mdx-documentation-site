import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Typography } from "@mui/material"
import Layout from "../components/layout/layout"
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
import {
  StyledEngineProvider,
  ThemeProvider,
  useTheme,
} from "@mui/material/styles"
import { graphql } from "gatsby"
import { useAllMDXMetadataQuery } from "../static-queries/use-all-mdx-metadata-query"
import { Seo } from "../components/seo"

export default function ContentPage({ data: { mdx }, children }) {
  const allMDXMetadata = useAllMDXMetadataQuery()
  const navigationTree = BuildNavigationTree(allMDXMetadata)
  const currentNode = GetNodeById(navigationTree, mdx.id)
  const breadcrumbNodes = GetBreadcrumbNodes(navigationTree, currentNode)
  const theme = useTheme()

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Layout
          navigationTree={navigationTree}
          breadcrumbNodes={breadcrumbNodes}
        >
          <Breadcrumbs breadcrumbNodes={breadcrumbNodes} />
          <Typography variant={"h1"}>{mdx.frontmatter.title}</Typography>
          <MdxDivider variant={"fullWidth"} />
          <TableOfContents currentNode={currentNode} />
          <MDXProvider
            components={{ ...MdxCustomizedComponents, ...MdxShortcodes }}
          >
            {children}
          </MDXProvider>
        </Layout>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
    }
  }
`
