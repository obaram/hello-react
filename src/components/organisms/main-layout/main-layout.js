import {StyledMainLayout} from "./main-layout.styles";
import {Navigation} from "../navigation/navigation";

export const MainLayout = ({children}) => {
    return (
        <StyledMainLayout>
            <Navigation/>
            {children}
        </StyledMainLayout>
    )
}
