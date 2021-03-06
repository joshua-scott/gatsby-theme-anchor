import CMS from 'netlify-cms-app';
import config from './config';
import AboutPreview from './AboutPreview';
import LandingPreview from './LandingPreview';

if (process.env.NODE_ENV === 'development') {
  const FileSystemBackend = require('netlify-cms-backend-fs');
  config.backend = {
    name: 'file-system',
    // @ts-ignore
    api_root: 'http://localhost:8000/api',
  };

  // @ts-ignore
  config.display_url = 'http://localhost:8000';
  // @ts-ignore
  config.load_config_file = false;
  CMS.registerBackend('file-system', FileSystemBackend);
}

CMS.registerPreviewTemplate('about', AboutPreview);
CMS.registerPreviewTemplate('landing', LandingPreview);
CMS.init({ config });
