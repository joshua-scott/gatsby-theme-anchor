import CMS from 'netlify-cms-app';
import FileSystemBackend from 'netlify-cms-backend-fs';
import config from './config';
import IndexPagePreview from './index-page-preview';

// @ts-ignore
config.load_config_file = false;

if (process.env.NODE_ENV === 'development') {
  config.backend = {
    name: 'file-system',
    // @ts-ignore
    api_root: 'http://localhost:8000/api',
  };

  // @ts-ignore
  config.display_url = 'http://localhost:8000';
  CMS.registerBackend('file-system', FileSystemBackend);
}

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.init({ config });
