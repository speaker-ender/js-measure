import { percentInViewport } from "@speaker-ender/js-measure";
import type { NextPage } from "next";
import DescriptionLayout from "../../components/layouts/documentation/description.layout";
import FunctionDemo from "../../components/positions/functionDemo";

const PercentInViewport: NextPage = () => {
  return (
    <DescriptionLayout
      functionName="inViewport"
      parameters={[
        {
          name: "element",
          type: "Element",
        },
        {
          name: "viewportHeight",
          type: "number",
          optional: true,
        },
        {
          name: "rect",
          type: "DOMRect",
          optional: true,
        },
      ]}
      description={[
        "Returns the percent of the element that is visible in the viewport",
      ]}
    >
      <FunctionDemo
        name="inViewport"
        testCallback={(element) => {
          return element ? `${percentInViewport(element)}` : "";
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

export default PercentInViewport;
