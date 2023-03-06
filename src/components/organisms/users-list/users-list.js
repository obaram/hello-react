import React from "react";

import UsersListItem from "../../molecules/users-list-item/users-list-item";
import Wrapper from "./wrapper.styles";
import StyledList from "./styled-list.styles";

const UsersList = ({users, deleteUser}) => {
    return (
        <>
            <Wrapper>
                <StyledList>
                    {users.map((user, i) => (
                        <UsersListItem index={i} user={user} key={i} deleteUser={deleteUser}/>
                    ))
                    }
                </StyledList>
            </Wrapper>
        </>
    )
}

export default UsersList;
