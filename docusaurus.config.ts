import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Kaleidoscope',
  tagline: 'Kaleidoscope documentation',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Hosted on GitHub Pages at https://terraframe.github.io/kaleidoscope-documentation/.
  // With a custom domain, set url to it and baseUrl to '/'.
  url: 'https://terraframe.github.io',
  baseUrl: '/kaleidoscope-documentation/',
  organizationName: 'terraframe',
  projectName: 'kaleidoscope-documentation',
  // GitHub Pages redirects /page to /page/, so generate URLs with the slash.
  trailingSlash: true,

  onBrokenLinks: 'throw',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Serve the docs at the site root; there is no separate landing page.
          routeBasePath: '/',
          // Add `editUrl` pointing at this repo to show "Edit this page" links.
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Kaleidoscope',
      logo: {
        alt: 'U.S. Army Corps of Engineers logo',
        src: 'img/usace-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://docs.geoprismregistry.com/version/v2.0.0',
          label: 'Geoprism Registry docs',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Welcome', to: '/'},
            {label: 'Where the data comes from', to: '/data'},
          ],
        },
        {
          title: 'Related',
          items: [
            {
              label: 'Geoprism Registry documentation',
              href: 'https://docs.geoprismregistry.com/version/v2.0.0',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TerraFrame. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
