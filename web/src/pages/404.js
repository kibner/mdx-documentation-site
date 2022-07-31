import React from "react"
import Seo from "../components/seo"
import { Typography } from "@mui/material"
import Layout from "../components/layout/layout"
import BuildNavigationTree from "../components/helpers/build-navigation-tree"
import MdxDivider from "../components/mdx/native-elements/mdx-divider"
import {
  StyledEngineProvider,
  ThemeProvider,
  useTheme,
} from "@mui/material/styles"
import { useAllMDXMetadataQuery } from "../static-queries/use-all-mdx-metadata-query"

export default function NotFoundPage() {
  const allMDXMetadata = useAllMDXMetadataQuery()
  const navigationTree = BuildNavigationTree(allMDXMetadata)
  const theme = useTheme()

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Layout navigationTree={navigationTree}>
          <Seo title="404: Not found" />
          <Typography variant={"h1"}>404: Not Found</Typography>
          <MdxDivider variant={"fullWidth"} />
          <Typography paragraph>
            You just hit a route that doesn&#39;t exist... the sadness.
          </Typography>
        </Layout>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
