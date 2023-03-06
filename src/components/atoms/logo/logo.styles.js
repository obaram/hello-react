import styled from "styled-components";

export const StyledLogo = styled.div`
  width: 100%;
  height: 100px;
  background: ${({theme}) => theme.colors.darkGrey};
  color: #fff;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  h2 {
    width: min-content;
    white-space: break-spaces;
  }
`
