import React from "react";
import {users} from "data/data";
import UsersListItem from "../users-list-item/users-list-item";
import Wrapper from "./wrapper.styles";
import StyledList from "./styled-list.styles";

const UsersList = () => (
    <Wrapper>
        <StyledList>
            {users.map((user) => (
                <UsersListItem user={user}></UsersListItem>
            ))
            }
        </StyledList>
    </Wrapper>
)

export default UsersList;
