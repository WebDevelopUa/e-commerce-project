import React from "react";
import {CustomButtonContainer} from "./customButtonStyles";

export const CustomButton = ({children, ...restProps}) => (
    <CustomButtonContainer {...restProps}>
        {children}
    </CustomButtonContainer>
)
