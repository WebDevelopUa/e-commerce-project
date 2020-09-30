import React from "react";
import {SpinnerContainer, SpinnerOverlay} from "./withSpinnerStyles";

export const withSpinner = WrappedComponent => {
    return ({isLoadingWithSpinner, ...otherProps}) => {
        return isLoadingWithSpinner ? (
            <SpinnerOverlay>
                <SpinnerContainer/>
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps}/>
        )
    }
}