import * as React from "react";
import { Header3, Paragraph } from "../../global/typography";
import { usePositionsState } from "../../hooks/usePositionsState";

export interface IWindowSize {
    windowWidth?: number;
    windowHeight?: number;
}

const WindowSize: React.FC = () => {
    const { windowSize } = usePositionsState();

    return (
        <div>
            <Header3>Window Size</Header3>
            <Paragraph><b>Window Width: </b>{windowSize.windowWidth}px</Paragraph>
            <Paragraph><b>Window Height: </b>{windowSize.windowHeight}px</Paragraph>
        </div>
    )
}

export default WindowSize;