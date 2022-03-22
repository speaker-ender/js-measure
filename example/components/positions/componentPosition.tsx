import * as React from "react";
import { Header3 } from "../../global/typography";
import Paragraph from '../content/paragraph';
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
            <Paragraph text={`height(): ${componentPosition.height}}px`} />
            <Paragraph text={`width(): ${componentPosition.width}}px`} />
            <Paragraph text={`topEdgeDistance(): ${componentPosition.topPosition}}px`} />
            <Paragraph text={`topEdgeDistance('document'): ${componentPosition.relativeTopPosition}}px`} />
            <Paragraph text={`rightEdgeDistance(): ${componentPosition.rightPosition}}px`} />
            <Paragraph text={`bottomEdgeDistance(): ${componentPosition.bottomPosition}}px`} />
            <Paragraph text={`bottomEdgeDistance('document): ${componentPosition.relativeBottomPosition}}px`} />
            <Paragraph text={`leftEdgeDistance(): ${componentPosition.leftPosition}}px`} />
            <Paragraph text={`inViewport(): ${componentPosition.inViewport ? 'true' : 'false'}}`} />
        </div>
    )
}

export default ComponentPosition;