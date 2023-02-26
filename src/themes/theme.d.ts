import 'styled-components';

declare module 'styled-components' {
    export interface Theme {
        name: string,
        colors: {
            main: string;
            secondary: string;
        };
    }
}