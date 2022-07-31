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
import {
  StyledEngineProvider,
  ThemeProvider,
  useTheme,
} from "@mui/material/styles"
import { graphql } from "gatsby"

export default function ContentPage({
                                      data: { mdx, allMdx, contentImagesRelativePath },
                                    }) {
  const imageWithExtraProps = props => (
    <MdxCustomizedComponents.img
      {...props}
      content_images_relative_path={contentImagesRelativePath}
    />
  )

  const mdxProviderComponents = {
    ...MdxCustomizedComponents,
    ...MdxShortcodes,
    img: imageWithExtraProps,
  }
  const navigationTree = BuildNavigationTree(allMdx.edges)
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
          <Seo title={mdx.frontmatter.title} />
          <Breadcrumbs breadcrumbNodes={breadcrumbNodes} />
          <Typography variant={"h1"}>{mdx.frontmatter.title}</Typography>
          <MdxDivider variant={"fullWidth"} />
          <TableOfContents currentNode={currentNode} />
          <MDXProvider components={mdxProviderComponents}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </Layout>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export const pageQuery = graphql`
  query ContentPageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
    allMdx(sort: { fields: slug }) {
      edges {
        node {
          id
          slug
          frontmatter {
            title
            display_order
          }
          tableOfContents
        }
      }
    }
    contentImagesRelativePath: allFile(
      filter: { sourceInstanceName: { eq: "content-images" } }
    ) {
      edges {
        node {
          relativePath
        }
      }
    }
  }
`
