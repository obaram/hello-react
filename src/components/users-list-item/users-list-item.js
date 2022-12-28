import React from "react";
import Button from "components/button/button";
import BadgeCircle from "../badge-circle/badge-circle-";
import Wrapper from "./wrapper.styles";


const  UsersListItem = (props) => {
    return (
    <Wrapper>
        <BadgeCircle value={props.user.average}/>
        <div>
            <p>{props.user.name}</p>
            <p>attendance: {props.user.attendance}</p>
        </div>
        <Button onClick={() => props.deleteUser(props.user)}/>
    </Wrapper>
    )
}

export default UsersListItem;

