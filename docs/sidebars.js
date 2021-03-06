/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  // But you can create a sidebar manually
};

module.exports = {
  docs: [
    "introduction",
    {
      type: "category",
      label: "Getting started",
      link: {
        title: "Getting started with RPS",
        type: "generated-index",
        description: "Learn how to get started",
      },
      collapsed: false,
      items: ["programming-logic", "tutorial", "gameplay"],
    },
    {
      type: "category",
      label: "Trivia",
      link: {
        type: "generated-index",
        description: "Learn how to get started",
      },
      items: ["algorithms", "use-in-real-life", "history"],
    },
    "contributing-collaborating",
    // {
    //   type: "link",
    //   label: "Demo",
    //   href: "https://lloydlobo.github.io/odin-rock-paper-scissors/",
    // },
    // {
    //   type: "category",
    //   label: "API",
    //   link: {
    //     type: "generated-index",
    //     title: "API",
    //     description: "Learn how to use the API",
    //   },
    //   collapsed: true,
    //   items: ["api/game", "api/player"],
    // },
  ],

  // This is where we define the sidebar for the gameplaySidebar page
  // gameplaySidebar: ["gameplay", "rules", "logic"],
  // gameplaySidebar: [
  //   {
  //     type: "category",
  //     label: "Gameplay",
  //     items: ["rules"],
  //   },
  // ],
};
