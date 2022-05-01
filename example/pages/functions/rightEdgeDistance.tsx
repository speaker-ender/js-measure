import type { NextPage } from "next";
import { rightEdgeDistance } from "../../../src/measure";
import DescriptionLayout from "../../components/layouts/documentation/description.layout";
import FunctionDemo from "../../components/positions/functionDemo";

const RightEdgeDistance: NextPage = () => {
  return (
    <DescriptionLayout
      functionName="rightEdgeDistance"
      parameters={[
        {
          name: "element",
          type: "Element",
        },
        {
          name: "relativeTo",
          type: "'document' | Element",
          optional: true,
        },
        {
          name: "rect",
          type: "DOMRect",
          optional: true,
        },
      ]}
      description={[
        "Fetches the distance of the right of the element passed to the function from the top of the viewport.",
        "If `relativeTo` is passed `document`, it will use the distance from the top of the document.",
        "If you pass any Element to `relativeTo`, it will return the distance between the right of `element` and the right of `relativeTo`.",
      ]}
    >
      <FunctionDemo
        name="rightEdgeDistance"
        testCallback={(element) => {
          return element ? `${rightEdgeDistance(element)}px` : "";
        }}
        cssControls={[
          {
            label: "Margin",
            prop: "margin",
            unit: "px",
            value: { margin: "" },
          },
          {
            label: "Height",
            prop: "height",
            unit: "px",
            value: { height: "auto" },
          },
          {
            label: "Width",
            prop: "width",
            unit: "px",
            value: { width: "auto" },
          },
        ]}
      />
    </DescriptionLayout>
  );
};

export default RightEdgeDistance;
