module.exports = {
    stories: [
        '../src/**/*.stories.@(mdx|js|jsx|ts|tsx)'
    ],
    addons: [
        "@storybook/preset-create-react-app",
        '@storybook/addon-essentials',
        '@storybook/addon-links',
        "storybook-addon-styled-component-theme/dist/preset",
        '@storybook/addon-a11y',
        "@storybook/addon-controls",
        '@storybook/addon-docs',
        "@storybook/addon-interactions"],
    features: {
        postcss: false
    },
    core: {
        builder: "webpack5"
    }
};