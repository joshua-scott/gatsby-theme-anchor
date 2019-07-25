import CMS from 'netlify-cms-app';
import config from './config';
import FileSystemBackend from 'netlify-cms-backend-fs';

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

CMS.init({ config });
