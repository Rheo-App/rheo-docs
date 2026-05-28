import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Rheo Docs',
      description: 'Official documentation for the Rheo Integration API',
      social: {
        github: 'https://github.com/Rheo-App',
      },
      expressiveCode: {
        themes: ['one-dark-pro', 'github-light'],
      },
      sidebar: [
        {
          label: 'Integration API',
          items: [
            { label: 'Overview', link: '/integration/overview/' },
            { label: 'Quick Start', link: '/integration/quickstart/' },
            { label: 'Authentication', link: '/integration/authentication/' },
            { label: 'Endpoints', link: '/integration/endpoints/' },
            { label: 'Webhooks', link: '/integration/webhooks/' },
            { label: 'Field Reference', link: '/integration/fields/' },
            { label: 'Domain System', link: '/integration/domains/' },
            { label: 'Errors', link: '/integration/errors/' },
            { label: 'Management API', link: '/integration/management/' },
            { label: 'Partner Analytics', link: '/integration/partner/' },
          ],
        },
        {
          label: 'Client SDKs',
          items: [
            { label: 'Overview', link: '/sdk/overview/' },
            { label: 'TypeScript', link: '/sdk/typescript/' },
            { label: 'C#', link: '/sdk/csharp/' },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
      head: [
        {
          tag: 'link',
          attrs: { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
        },
        {
          tag: 'script',
          content: `
            (function() {
              var stored = localStorage.getItem('starlight-theme');
              if (!stored) {
                document.documentElement.setAttribute('data-theme', 'light');
              }
            })();
          `,
        },
      ],
    }),
  ],
});
