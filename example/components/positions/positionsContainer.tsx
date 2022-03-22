import * as React from "react";
import { useEffect } from "react";
import { StyledButton } from "../../global/button.styles";
import { usePositionsState } from "../../hooks/usePositionsState";
import ComponentPosition from "./componentPosition";
import { StyledPositionsContainer } from "./positionsContainer.styles";
import ScrollPosition from "./scrollPosition";
import WindowSize from "./windowSize";

const PositionsContainer: React.FC = () => {
    const { refreshPositions, targetElement } = usePositionsState();

    useEffect(() => {
        !!targetElement && refreshPositions();
        return () => {
        }
    }, [targetElement]);

    return (
        <>
            <WindowSize />
            <ScrollPosition />
            <ComponentPosition />
            <StyledButton onClick={() => refreshPositions()}>Refresh</StyledButton>
        </>
    )
}

export default PositionsContainer;