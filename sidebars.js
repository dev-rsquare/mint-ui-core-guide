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
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '컴포넌트 설명',
      items: [
        'guides/component-accordion',
        'guides/component-animator',
        'guides/component-autocomplete',
        'guides/component-button',
        'guides/component-carousel',
        {
          type: 'category',
          label: 'Chart',
          items: [
            'guides/component-line-chart',
          ]
        },
        {
          type: 'category',
          label: 'Form',
          items: [
            'guides/component-form',
            'guides/component-input',
            'guides/component-check',
            'guides/component-select',
            'guides/component-radio',
            'guides/component-textarea',
          ]
        },
        'guides/component-context-menu',
        'guides/component-dropdown',
        'guides/component-flex',
        'guides/component-flip-text',
        'guides/component-grid',
        'guides/component-loading',
        'guides/component-modal-wrapper',
        'guides/component-table',
        'guides/component-text',
        'guides/component-toast',
        'guides/component-tree',
        'guides/component-virtual-list',
      ],
    },
    {
      type: 'category',
      label: '활용 가이드',
      items: [
        'guides/component-basic',
      ],
    },
  ],

};

module.exports = sidebars;
