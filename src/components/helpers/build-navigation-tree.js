import SortNavigationTree from "./sort-navigation-tree"

const BuildNavigationTree = nodes => {
  const result = []
  const level = { result }

  nodes.forEach(node => {
    node.slug.split("/").reduce((accumulator, currentValue) => {
      if (currentValue === "") {
        return accumulator
      }

      if (accumulator[currentValue]) {
        // current entry is already in accumulator so do nothing
      } else {
        accumulator[currentValue] = { result: [] }

        accumulator.result.push({
          children: accumulator[currentValue].result,
          id: node.id,
          title: node.frontmatter.title,
          display_order: node.frontmatter.display_order,
          slug: node.slug,
          table_of_contents: node.tableOfContents,
        })
      }

      return accumulator[currentValue]
    }, level)
  })

  return SortNavigationTree(result)
}

export default BuildNavigationTree
