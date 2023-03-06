import styled from 'styled-components';

const StyledBadgeCircle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    margin-right: 40px;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => {

        if (props.value < 2.5) {
            return props.theme.colors.error;
        };

        if (props.value >2.5 && props.value < 4) {
            return props.theme.colors.warning;
        };
        
        return props.theme.colors.success}
    
}}}
`
export default StyledBadgeCircle;

