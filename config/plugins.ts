import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  upload: {
    config: {
      provider: 'strapi-provider-upload-azure-storage',
      providerOptions: {
        authType: 'default',
        account: env('AZURE_STORAGE_ACCOUNT'),
        accountKey: env('AZURE_STORAGE_ACCOUNT_KEY'),
        containerName: env('AZURE_STORAGE_CONTAINER_NAME'),
        defaultPath: 'media',
      },
    },
  },
});

export default config;  