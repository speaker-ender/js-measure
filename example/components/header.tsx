import * as React from "react";
import { StyledHeader, StyledHeaderTitle } from "./header.styles";

interface IHeader {
    updateNavOpen: (navState?: boolean) => void;
}

const Header: React.FC<IHeader> = (props) => {

    return (
        <StyledHeader>
            <StyledHeaderTitle>
                JS Position Helpers
            </StyledHeaderTitle>
        </StyledHeader>
    )
}

export default Header;