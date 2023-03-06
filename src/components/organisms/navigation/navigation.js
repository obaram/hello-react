import {NavLink} from "react-router-dom";
import {StyledNav} from "./navigation-styles";
import {Logo} from "../../atoms/logo/logo";


export const Navigation = () => {
    return (
        <StyledNav>
            <Logo text='Studdy Buddy'/>
            <ul>
                <li><NavLink to='/' className={(navData) => (navData.isActive ? "active-link" : 'none')}>Dashboard</NavLink></li>
                <li><NavLink to='/add-user' className={(navData) => (navData.isActive ? "active-link" : 'none')}>Add user</NavLink></li>
                <li>Settings</li>
            </ul>
        </StyledNav>
    )
}
