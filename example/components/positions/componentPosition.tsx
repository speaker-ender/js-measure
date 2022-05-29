import * as React from "react";
import { Header3 } from "../../global/typography";
import Paragraph from "../content/paragraph";
import { usePositionsState } from "../../hooks/usePositionsState";

export interface IComponentPosition {
  height: number;
  width: number;
  topEdgeDistanceViewport: number;
  topEdgeDistanceDocument: number;
  rightEdgeDistance: number;
  bottomEdgeDistanceViewport: number;
  bottomEdgeDistanceDocument: number;
  leftEdgeDistance: number;
  inViewport: boolean;
  percentInViewport: number;
}

const ComponentPosition: React.FC = () => {
  const { componentPosition } = usePositionsState();

  return (
    <div>
      <Header3>Component Positions</Header3>
      <Paragraph text={`height(): ${componentPosition.height}}px`} />
      <Paragraph text={`width(): ${componentPosition.width}}px`} />
      <Paragraph
        text={`topEdgeDistance(): ${componentPosition.topEdgeDistanceViewport}}px`}
      />
      <Paragraph
        text={`topEdgeDistance('document'): ${componentPosition.topEdgeDistanceDocument}}px`}
      />
      <Paragraph
        text={`rightEdgeDistance(): ${componentPosition.rightEdgeDistance}}px`}
      />
      <Paragraph
        text={`bottomEdgeDistance(): ${componentPosition.bottomEdgeDistanceViewport}}px`}
      />
      <Paragraph
        text={`bottomEdgeDistance('document): ${componentPosition.bottomEdgeDistanceDocument}}px`}
      />
      <Paragraph
        text={`leftEdgeDistance(): ${componentPosition.leftEdgeDistance}}px`}
      />
      <Paragraph
        text={`inViewport(): ${
          componentPosition.inViewport ? "true" : "false"
        }`}
      />
      <Paragraph
        text={`percentInViewport(): ${componentPosition.percentInViewport}%`}
      />
    </div>
  );
};

export default ComponentPosition;
