import 'styled-components';

declare module 'styled-components' {
    export interface CodeLabTheme {
        name: string,
        colors: {
            main: string;
            secondary: string;
        };
    }
}