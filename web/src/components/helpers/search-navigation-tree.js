const GetNode = (navigationTree, equalityExpression) => {
  const queue = [...navigationTree]

  while (queue.length > 0) {
    const currentNode = queue.shift()

    if (equalityExpression(currentNode)) {
      return currentNode
    }

    for (const childNode of currentNode.children) {
      queue.push(childNode)
    }
  }

  return false
}

export function GetNodeById(navigationTree, nodeId) {
  return GetNode(navigationTree, node => node.id === nodeId)
}

export function GetNodeBySlug(navigationTree, slug) {
  return GetNode(navigationTree, node => node.slug === slug)
}

export function GetBreadcrumbNodes(navigationTree, currentNode) {
  if (!currentNode) return false

  let searchNode = navigationTree
  const breadcrumbNodes = []

  // search each segment of slug
  currentNode.slug.split("/").reduce((previousValue, currentValue) => {
    const slug =
      previousValue.length > 0
        ? `${previousValue}/${currentValue}`
        : currentValue
    const searchResult = GetNodeBySlug(searchNode, slug)

    if (searchResult) {
      breadcrumbNodes.push(searchResult)
      searchNode = searchResult.children
    }

    return slug
  }, "")

  return breadcrumbNodes
}
