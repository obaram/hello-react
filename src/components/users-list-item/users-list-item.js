import React from "react";
import Button from "components/button/button";
import BadgeCircle from "../badge-circle/badge-circle-";
import Wrapper from "./wrapper.styles";


const  UsersListItem = (props) => (
    <Wrapper>
        <BadgeCircle value={props.user.average}/>
        <div>
            <p>{props.user.name}</p>
            <p>attendance: {props.user.attendance}</p>
        </div>
        <Button/>
    </Wrapper>
 )

export default UsersListItem;

