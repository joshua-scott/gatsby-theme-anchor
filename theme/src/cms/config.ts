import CMS from 'netlify-cms-app';
import IndexPagePreview from './index-page-preview';

CMS.registerPreviewTemplate('index', IndexPagePreview);

const config = {
  backend: {
    name: 'git-gateway',
    branch: 'master',
  },
  load_config_file: false,
  media_folder: 'static/images/uploads',
  public_folder: '/images/uploads',
  collections: [
    {
      label: 'Pages',
      name: 'pages',
      files: [
        {
          label: 'Index',
          name: 'index',
          file: 'src/pages/index.md',
          fields: [
            {
              label: 'Template Key',
              name: 'templateKey',
              widget: 'hidden',
              default: 'about-page',
            },
            { label: 'Title', name: 'title', widget: 'string' },
            { label: 'Body', name: 'body', widget: 'markdown' },
          ],
        },
      ],
    },
  ],
};

export default config;
