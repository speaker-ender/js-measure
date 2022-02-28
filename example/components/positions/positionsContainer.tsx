import * as React from "react";
import { useEffect } from "react";
import { usePositionsState } from "../../hooks/usePositionsState";
import ComponentPosition from "./componentPosition";
import { StyledPositionsContainer } from "./positionsContainer.styles";
import ScrollPosition from "./scrollPosition";
import WindowSize from "./windowSize";

const PositionsContainer: React.FC = () => {
    const { scrollPosition, windowSize, refreshPositions, targetElement } = usePositionsState();

    useEffect(() => {
        !!targetElement && refreshPositions();
        return () => {
        }
    }, [targetElement]);

    return (
        <StyledPositionsContainer>
            <WindowSize />
            <ScrollPosition />
            <ComponentPosition />
            <button onClick={() => refreshPositions()}>Refresh</button>
        </StyledPositionsContainer>
    )
}

export default PositionsContainer;