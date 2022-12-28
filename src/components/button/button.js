import {ReactComponent as DeleteIcon} from "../../assets/delete-icon.svg";
import React from "react";
import StyledButton from './button.styles'

const Button = (props) => {
    return (
        <StyledButton {...props}><DeleteIcon/></StyledButton>
    )
}

export default Button;
