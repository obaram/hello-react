import React from "react";
import StyledBadgeCircle from "./badge-circle.styles";

const BadgeCircle = ({value}) => {
    return (
        <StyledBadgeCircle value={value}>{value}</StyledBadgeCircle>
    )
}

export default BadgeCircle;
