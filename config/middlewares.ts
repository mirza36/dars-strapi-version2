import type { Core } from '@strapi/strapi';

const config: Core.Config.Middlewares = [
  'strapi::logger',
  'strapi::errors',

  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': [
            "'self'",
            'https:',
            'https://darsemarefat.blob.core.windows.net',
          ],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'https://darsemarefat.blob.core.windows.net',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'https://darsemarefat.blob.core.windows.net',
          ],
          'frame-src': [
            "'self'",
            'http://localhost:3000',
          ],
          'frame-ancestors': [
            "'self'",
            'http://localhost:3000',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },

  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

export default config;