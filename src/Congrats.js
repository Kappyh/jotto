/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

/**
 * Functional react component congrats message
 * 
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component (or null if 'sucess' props is false)
 */
export default (props) => {
    if (props.sucess) {
        return (
            <div data-test="component-congrats">
                <span data-test="congrats-message">
                    Congratulations! You guessed the word
                </span>
            </div>
        )
    } else {
        return (
            <div data-test="component-congrats" />
        );
    }
}