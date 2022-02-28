import * as React from "react";
import { Header3, Paragraph } from "../../global/typography";
import { usePositionsState } from "../../hooks/usePositionsState";

export interface IScrollPosition {
    scrollTop?: number;
    scrollLeft?: number;
}

const ScrollPosition: React.FC = () => {
    const { scrollPosition } = usePositionsState();

    return (
        <div>
            <Header3>Scroll Positions</Header3>
            <Paragraph><b>Scroll Distance From Top of Page: </b>{scrollPosition.scrollTop}px</Paragraph>
            <Paragraph><b>Scrol Distance from Left of Page: </b>{scrollPosition.scrollLeft}px</Paragraph>
        </div>
    )
}

export default ScrollPosition;