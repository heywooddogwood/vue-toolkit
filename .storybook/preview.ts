import { setup, type Preview } from "@storybook/vue3";

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives
});

setup((app) => {
  app.use(vuetify);
});

const preview: Preview = {
  // TODO: This is what storybook tells us to do:
  // https://storybook.js.org/docs/writing-docs/autodocs
  // but doesn't seem to work. Why not?
  // For now, we can work around this by marking each story
  // with this tag
  // tags: ["autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
