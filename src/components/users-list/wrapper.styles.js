import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    max-width: 500px;
    background-color: ${(props) => props.theme.colors.white};
    padding: 40px 30px;
    border-radius: 25px;
    box-shadow: 0 5px 15px -10px rgba(0,0,0,0.3);
`
 export default Wrapper;
