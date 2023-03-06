import React from "react";
import BadgeCircle from "../../atoms/badge-circle/badge-circle-";
import Wrapper from "./wrapper.styles";
import DeleteButton from "../../atoms/delete-button/delete-button";


const  UsersListItem = (props) => {
    return (
    <Wrapper>
        <BadgeCircle value={props.user.average}/>
        <div>
            <p>{props.user.name}</p>
            <p>attendance: {props.user.attendance}</p>
        </div>
        <DeleteButton onClick={() => props.deleteUser(props.user)}/>
    </Wrapper>
    )
}

export default UsersListItem;

