import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 15%;
  background-color: ${({theme}) => theme.colors.lightGrey};
  border: 1px solid ${({theme}) => theme.colors.grey};

  ul {
    margin-top: 20px;
    list-style-type: none;
    text-decoration: none;

    li {
      padding: 10px 0px;
      text-decoration: none;

      a {
        text-decoration: none;

        &.active-link {
          content: '';
          display: block;
          position: relative;

          &::after {
            content: '';
            display: block;
            position: absolute;
            width: 100px;
            border: 3px solid ${({theme}) => theme.colors.darkGrey};
            height: 3px;
            right: 0px;
            top:6px;
          }
        }
      }
    }
  }
`
