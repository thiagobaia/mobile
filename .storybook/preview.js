import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone12promax',
  },
  backgrounds: {
    values: [
      { name: 'gray', value: 'gray' },
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
