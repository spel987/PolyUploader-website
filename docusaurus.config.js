import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PolyUploader',
  tagline: 'Upload your files remotely to different hosting sites',
  favicon: 'img/favicon.ico',

  url: 'https://polyuploader.vercel.app/',
  baseUrl: '/',

  organizationName: 'spel987',
  projectName: 'PolyUploader',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/spel987/PolyUploader-website/tree/main/docs/',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'PolyUploader',
        logo: {
          alt: 'PolyUploader Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guide & Explications',
          },
          {
            href: 'https://github.com/spel987/PolyUploader',
            label: 'GitHub Repository',
            position: 'right',
          },
        ],
      },
      footer: {

        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Guide & Explications',
                to: '/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub Repository',
                href: 'https://github.com/spel987/PolyUploader',
              },
              {
                label: 'Site GitHub Repository',
                href: 'https://github.com/spel987/PolyUploader-website',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PolyUploader, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
