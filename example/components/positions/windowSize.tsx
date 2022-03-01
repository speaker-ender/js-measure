import * as React from "react";
import { Header3, Paragraph } from "../../global/typography";
import { usePositionsState } from "../../hooks/usePositionsState";

export interface IWindowSize {
    windowWidth: number;
    windowHeight: number;
    documentHeight: number;
}

const WindowSize: React.FC = () => {
    const { windowSize } = usePositionsState();

    return (
        <div>
            <Header3>Window Size</Header3>
            <Paragraph><b>windowWidth(): </b>{windowSize.windowWidth}px</Paragraph>
            <Paragraph><b>windowHeight(): </b>{windowSize.windowHeight}px</Paragraph>
            <Paragraph><b>documentHeight(): </b>{windowSize.documentHeight}px</Paragraph>
        </div>
    )
}

export default WindowSize;