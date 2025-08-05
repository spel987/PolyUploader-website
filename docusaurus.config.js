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
            'https://github.com/spel987/PolyUploader-website/tree/main/',
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
      metadata: [
        {name: 'og:url', content: 'https://polyuploader.vercel.app'},
        {name: 'og:image', content: 'https://p-u.vercel.app/assets/meta_visual.png'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:image', content: 'https://p-u.vercel.app/assets/meta_visual.png'},
        {name: 'og:description', content: 'Documentation - PolyUploader. Upload your files remotely to different hosting sites.'},
        {name: 'theme-color', content: '#4f46e5'},
        {name: 'google-site-verification', content: 'dUIfx_ZLCzBvgIpq4n0tj7OpEyAqDt3kugqd5ryb02w'}
      ],
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
            label: 'Documentation',
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
                label: 'Documenatation',
                to: '/presentation',
              },
              {
                label: 'Download for Windows',
                to: 'https://github.com/spel987/PolyUploader/releases/download/1.7.0/PolyUploader_1.7.0_x64-setup.exe',
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
                label: 'Terms',
                href: 'https://p-u.vercel.app/terms',
              },
              {
                label: 'Statistics',
                href: 'https://p-u.vercel.app/statistics',
              },
              {
                label: 'Site GitHub Repository',
                href: 'https://github.com/spel987/PolyUploader-website',
              },
              {
                label: 'API GitHub Repository',
                href: 'https://github.com/spel987/PolyUploader-API',
              }
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
