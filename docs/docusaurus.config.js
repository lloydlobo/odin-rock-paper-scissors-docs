// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Odin Rock Paper Scissors",
  tagline: "Documenting a different kind of game which hones your instincts",
  url: "https://lloydlobo.github.io/",
  baseUrl: "/odin-rock-paper-scissors-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "lloydlobo", // Usually your GitHub org/user name.
  projectName: "odin-rock-paper-scissors-docs", // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/lloydlobo/odin-rock-paper-scissors-docs/tree/main/docs/docs/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/lloydlobo/odin-rock-paper-scissors-docs/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Odin Rock Paper Scissors",
        logo: {
          alt: "Odin RPS Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "introduction",
            position: "left",
            label: "Docs",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          // {
          //   type: "doc",
          //   docId: "gameplay",
          //   position: "left",
          //   label: "Gameplay",
          // },
          {
            href: "https://lloydlobo.github.io/odin-rock-paper-scissors/",
            label: "Demo",
            position: "right",
          },
          {
            href: "https://github.com/lloydlobo/odin-rock-paper-scissors/",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Documentation",
                to: "/docs",
              },
              {
                label: "Programming Logic",
                to: "/docs/programming-logic",
              },
              {
                label: "Contributing and collaborating",
                to: "/docs/contributing-collaborating",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/rock-paper-scissors",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/lloydlobo",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/thelloydlobo",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/lloydlobo/odin-rock-paper-scissors-docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Odin Rock Paper Scissors. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  // ...
  themes: ["@saucelabs/theme-github-codeblock"],
  // ...
};

module.exports = config;
