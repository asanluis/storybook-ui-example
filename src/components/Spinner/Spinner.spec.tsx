import React from 'react';
import {render} from "@testing-library/react";
import "@testing-library/jest-dom";
import Spinner from './index';
import {SpinnerProps} from "./Spinner.types";
import {ThemeProvider} from "styled-components";
import {lightTheme} from "../../themes/light.theme";


describe('[Spinner]', () => {
    it('Should render a Spinner', () => {
        const props: SpinnerProps = {
            rotate: 30, delay: 0.2
        }
        const {container} = render(<ThemeProvider theme={lightTheme}><Spinner {...props} /></ThemeProvider>);
        expect(container.firstChild).toMatchSnapshot();
    });
});

