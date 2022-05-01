import type { NextPage } from "next";
import { rawWidthWithMargin } from "../../../src/measure";
import DescriptionLayout from "../../components/layouts/documentation/description.layout";
import FunctionDemo from "../../components/positions/functionDemo";

const RawWidthWithMargin: NextPage = () => {
  return (
    <DescriptionLayout
      functionName="rawWidthWithMargin"
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
        "This is the raw width with margin function for maximum performance",
      ]}
    >
      <FunctionDemo
        name="rawWidthWithMargin"
        testCallback={(element) => {
          return element ? `${rawWidthWithMargin(element)}px` : "";
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

export default RawWidthWithMargin;
