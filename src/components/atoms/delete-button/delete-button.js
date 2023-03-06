import {ReactComponent as DeleteIcon} from "../../../assets/delete-icon.svg";
import React from "react";
import StyledButton from "./delete-button.styles";


const DeleteButton = (props) => {
    return (
        <StyledButton {...props}><DeleteIcon/></StyledButton>
    )
}

export default DeleteButton;
