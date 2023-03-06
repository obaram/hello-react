import styled from "styled-components";

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

export default Wrapper;
