// @ts-check

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

// Automatically detect the repository name for GitHub Pages deployment (e.g. in forks)
const githubRepository = process.env.GITHUB_REPOSITORY;
const [organizationName, projectName] = githubRepository
  ? githubRepository.split('/')
  : ['docwire', 'docwire.io']; // Default to main repo

const currentBranch = process.env.CURRENT_BRANCH || 'master';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docwire',
  tagline: 'Award-winning modern data processing in C++20',
  favicon: 'img/FaviconLogo.png',

  // Set the production url of your site here
  url: `https://${organizationName}.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/${projectName}/`,

  // GitHub pages deployment config.
  organizationName, // Your GitHub username
  projectName, // Your repo name

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
            `https://github.com/${organizationName}/${projectName}/tree/${currentBranch}/`,
        },
        blog: {
          showReadingTime: true,
          editUrl:
            `https://github.com/${organizationName}/${projectName}/tree/${currentBranch}/`,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Docwire',
        logo: {
          alt: 'Docwire Logo',
          src: 'img/logoDocWire.JPG',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/docwire/docwire',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Legal',
            items: [
              {
                label: 'Privacy Policy',
                to: '/privacy',
              },
              {
                label: 'Terms of Use',
                to: '/terms-of-service',
              },
            ],
          },
        ],
        copyright: `© DocWire SDK<br/>© SILVERCODERS Ltd.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;