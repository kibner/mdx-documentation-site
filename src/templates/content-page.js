import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Typography } from "@mui/material"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
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
import {
  StyledEngineProvider,
  ThemeProvider,
  useTheme,
} from "@mui/material/styles"

const ContentPage = ({ pageContext }) => {
  const mdxProviderComponents = { ...MdxCustomizedComponents, ...MdxShortcodes }
  const allMdx = useAllMdxQuery()
  const navigationTree = BuildNavigationTree(allMdx)
  const currentNode = GetNodeById(navigationTree, pageContext.id)
  const breadcrumbNodes = GetBreadcrumbNodes(navigationTree, currentNode)
  const theme = useTheme()

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Layout
          navigationTree={navigationTree}
          breadcrumbNodes={breadcrumbNodes}
        >
          <Seo title={pageContext.frontmatter.title} />
          <Breadcrumbs breadcrumbNodes={breadcrumbNodes} />
          <Typography variant={"h1"}>
            {pageContext.frontmatter.title}
          </Typography>
          <MdxDivider variant={"fullWidth"} />
          <TableOfContents currentNode={currentNode} />
          <MDXProvider components={mdxProviderComponents}>
            <MDXRenderer>{pageContext.body}</MDXRenderer>
          </MDXProvider>
        </Layout>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default ContentPage
