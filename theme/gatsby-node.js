exports.createPages = ({ actions, reporter }) => {
  actions.createPage({
    path: '/',
    component: require.resolve('./src/templates/Landing.tsx'),
  });
  actions.createPage({
    path: '/about',
    component: require.resolve('./src/templates/About.tsx'),
    context: {
      name: 'About',
    },
  });
  actions.createPage({
    path: '/episodes',
    component: require.resolve('./src/templates/Episodes.tsx'),
    context: {
      name: 'Episodes',
    },
  });
};

exports.onCreateDevServer = ({ app }) => {
  const fsMiddlewareAPI = require('netlify-cms-backend-fs/dist/fs');
  fsMiddlewareAPI(app);
};
