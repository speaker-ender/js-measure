import * as React from "react";
import { Header3, Paragraph } from "../../global/typography";
import { usePositionsState } from "../../hooks/usePositionsState";

export interface IComponentPosition {
    height: number,
    width: number,
    topPosition: number,
    relativeTopPosition: number,
    rightPosition: number,
    bottomPosition: number,
    relativeBottomPosition: number,
    leftPosition: number,
    inViewport: boolean,
}

const ComponentPosition: React.FC = () => {
    const { componentPosition } = usePositionsState();

    return (
        <div>
            <Header3>Component Positions</Header3>
            <Paragraph><b>height(): </b>{componentPosition.height}px</Paragraph>
            <Paragraph><b>width(): </b>{componentPosition.width}px</Paragraph>
            <Paragraph><b>topEdgeDistance(): </b>{componentPosition.topPosition}px</Paragraph>
            <Paragraph><b>topEdgeDistance('document'): </b>{componentPosition.relativeTopPosition}px</Paragraph>
            <Paragraph><b>rightEdgeDistance(): </b>{componentPosition.rightPosition}px</Paragraph>
            <Paragraph><b>bottomEdgeDistance(): </b>{componentPosition.bottomPosition}px</Paragraph>
            <Paragraph><b>bottomEdgeDistance('document'): </b>{componentPosition.relativeBottomPosition}px</Paragraph>
            <Paragraph><b>leftEdgeDistance(): </b>{componentPosition.leftPosition}px</Paragraph>
            <Paragraph><b>inViewport(): </b>{componentPosition.inViewport ? 'true' : 'false'}</Paragraph>
        </div>
    )
}

export default ComponentPosition;