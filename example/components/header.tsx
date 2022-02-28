import dynamic from "next/dynamic";
import * as React from "react";
import { StyledHeader, StyledHeaderTitle } from "./header.styles";

interface IHeader {
    updateNavOpen: (navState?: boolean) => void;
}

const Header: React.FC<IHeader> = (props) => {

    // const handleClick = () => {
    //     props.updateNavOpen()
    // }

    return (
        <StyledHeader>
            <StyledHeaderTitle>
                JS Positions
            </StyledHeaderTitle>
        </StyledHeader>
    )
}

export default Header;