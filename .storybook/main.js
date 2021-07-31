module.exports = {
  "stories": [
    '../src/components/**/stories.tsx',
    '../src/components/**/stories.mdx'
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`);
    return config
  }
}
