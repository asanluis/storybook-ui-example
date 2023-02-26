import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import {themes} from "../src/themes";


export const parameters = {
    options: {
        storySort: {
            method: '',
            order: [
                'Overview',
                'Developer Guide',
                'Components',
            ],
        }
    }
};

addDecorator(withThemesProvider(themes), ThemeProvider);


