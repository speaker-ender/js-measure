import type { NextPage } from "next";
import DescriptionLayout from "../../components/layouts/documentation/description.layout";

const BottomEdgeDistance: NextPage = () => {
  return (
    <DescriptionLayout
      functionName="bottomEdgeDistance"
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
        "Fetches the distance of the bottom of the element passed to the function from the top of the viewport.",
        "If `relativeTo` is passed `document`, it will use the distance from the top of the document.",
        "If you pass any Element to `relativeTo`, it will return the distance between the bottom of `element` and the bottom of `relativeTo`.",
      ]}
    />
  );
};

export default BottomEdgeDistance;
