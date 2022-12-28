import styled from 'styled-components';

const StyledButton = styled.button`
       display: flex;
       justify-content: center;
       align-items: center;
       background-color: ${(props) => props.theme.colors.darkGrey};
       border-radius:25px;
       border: none;
       width: 35px;
       height: 35px;
       margin-left: 40px;
       
       &:hover{
            cursor: pointer;
       }
       
       svg {
            width: 100%;
            height: 100%;
       }
    `
export default StyledButton;
