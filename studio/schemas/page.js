export default {
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "display_order",
      title: "Display Order",
      type: "number"
    },
    {
      name: "body",
      title: "Body",
      type: "markdown",
    }
  ]
}