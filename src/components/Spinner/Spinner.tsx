import PropTypes from "prop-types";
import React from "react";
import {SpinnerProps} from "./Spinner.types";
import {CircleContainer, OneCircle} from "./Spinner.styles";

export const Spinner = (properties: SpinnerProps) => {

    const circleProps = Array.from(Array(12), (val, i) => ({
        rotate: `${properties.rotate * i}deg`,
        delay: `${-1.2 + i * properties.delay}s`
    }));
    return (
        <CircleContainer>
            {circleProps.map(circleProp => (
                <OneCircle key={circleProp.rotate} {...circleProp} />
            ))}
        </CircleContainer>
    );

}


Spinner.displayName = 'Spinner';

Spinner.propTypes = {
    rotate: PropTypes.number,
    delay: PropTypes.number,
};

export default Spinner;