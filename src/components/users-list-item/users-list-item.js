import React from "react";
import styled from 'styled-components'

const Wrapper = styled.li`
    display:flex;
    position:relative;
    align-items: center;
    &::after {
        content: '';
        position:absolute;
        bottom:0;
        width:100%;
        height:1px;
        background-color:lightgrey;
    }
`


const  UsersListItem = (props) => (
    <Wrapper>
        <div>{props.user.average}</div>
        <div>
            <p>{props.user.name}</p>
            <p>attendance: {props.user.attendance}</p>
        </div>
        <button>X</button>
    </Wrapper>
 )

export default UsersListItem;

