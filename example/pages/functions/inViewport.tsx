import type { NextPage } from "next";
import { inViewport } from "../../../src/measure";
import DescriptionLayout from "../../components/layouts/documentation/description.layout";
import FunctionDemo from "../../components/positions/functionDemo";

const InViewport: NextPage = () => {
  return (
    <DescriptionLayout
      functionName="inViewport"
      parameters={[
        {
          name: "element",
          type: "Element",
        },
        {
          name: "rect",
          type: "DOMRect",
          optional: true,
        },
      ]}
      description={[
        "Returns `true` if all edges of the element passed to the function are inside of the viewport",
      ]}
    >
      <FunctionDemo
        name="inViewport"
        testCallback={(element) => {
          return element ? `${inViewport(element)}` : "";
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

export default InViewport;
