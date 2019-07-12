exports.createPages = ({ actions, reporter }) => {
  actions.createPage({
    path: "/",
    component: require.resolve("./src/templates/Home.js"),
  })
}
