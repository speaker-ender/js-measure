import * as React from "react";
import { Header3, Paragraph } from "../../global/typography";
import { usePositionsState } from "../../hooks/usePositionsState";

export interface IComponentPosition {
    topPosition: number,
    relativeTopPosition: number,
    rightPosition: number,
    bottomPosition: number,
    leftPosition: number,
    inViewPort: boolean,
}

const ComponentPosition: React.FC = () => {
    const { componentPosition } = usePositionsState();

    return (
        <div>
            <Header3>Component Positions</Header3>
            <Paragraph><b>Component Distance from Top of Viewport: </b>{componentPosition.topPosition}px</Paragraph>
            <Paragraph><b>Component Distance from Top of Page: </b>{componentPosition.relativeTopPosition}px</Paragraph>
            <Paragraph><b>Component Distance from Right of Page or container: </b>{componentPosition.rightPosition}px</Paragraph>
            <Paragraph><b>Distance from Bottom of Element to Top of Viewport: </b>{componentPosition.bottomPosition}px</Paragraph>
            <Paragraph><b>Distance from Left of Page or container: </b>{componentPosition.leftPosition}px</Paragraph>
            <Paragraph><b>Distance from Left of Page or container: </b>{componentPosition.leftPosition}px</Paragraph>
            <Paragraph><b>Element Is In Viewport: </b>{componentPosition.inViewPort || 'false'}</Paragraph>
        </div>
    )
}

export default ComponentPosition;