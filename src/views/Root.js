import UsersList from "components/users-list/users-list";
import styled, {ThemeProvider} from 'styled-components';
import {GlobalStyle} from "../styles/global-style";
import {theme} from "../styles/theme";

const Wrapper = styled.div`
    background-color: #f7f8fa;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Root = () => {
  return (
      <>
        <ThemeProvider theme={theme}>
        <GlobalStyle/>
                <Wrapper>
                    <UsersList/>
                </Wrapper>
        </ThemeProvider>
      </>
  );
}

export default Root;
