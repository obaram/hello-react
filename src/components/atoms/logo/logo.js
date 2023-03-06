import {StyledLogo} from "./logo.styles";

export const Logo = ({text, ...props}) => {
    return (
        <StyledLogo>
            <h2>{text}</h2>
        </StyledLogo>
    )
}
