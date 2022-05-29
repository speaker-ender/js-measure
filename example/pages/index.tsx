import type { NextPage } from "next";
import { StyledPanel } from "../global/panel.styles";
import { Header2, Header3 } from "../global/typography";
import { StyledPage } from "../global/page.styles";
import Paragraph from "../components/content/paragraph";
import { StyledImageGrid } from "../components/content/imageGrid.styles";
import ImageComponent from "../components/content/image";

const Home: NextPage = () => {
  return (
    <StyledPage>
      <Header2>JS Measure</Header2>
      <StyledPanel>
        <Paragraph text="Querying the DOM can become cumbersome and unweildy 😢" />
        <Paragraph text="JS-Measure seeks to solve this by abstracting common queries into easy to use functions." />
        <Paragraph text="Now you no longer have to worry about things like: making sure the Window exists, supporting legacy DOM queries, and accounting for element margins." />
      </StyledPanel>
      <Header3>Usage</Header3>
      <StyledPanel>
        <Paragraph text="Click on an image to measure it!" />
        <Paragraph text="The bug in the bottom right corner will open a panel where you can view all of the DOM values." />
        <Paragraph text="You can also click the refresh button inside the debug panel to manually update the values." />
      </StyledPanel>
      <StyledImageGrid columns={2}>
        <ImageComponent isTargetElement={true} />
        <ImageComponent />
        <StyledImageGrid columns={2}>
          <ImageComponent />
          <ImageComponent />
          <ImageComponent />
          <ImageComponent />
        </StyledImageGrid>
        <StyledImageGrid columns={4} rows={4}>
          <ImageComponent />
          <ImageComponent />
          <ImageComponent />
          <ImageComponent />
          <ImageComponent />
          <ImageComponent />
          <ImageComponent />
          <ImageComponent />
          <ImageComponent />
          <ImageComponent />
          <ImageComponent />
          <ImageComponent />
          <ImageComponent />
          <ImageComponent />
          <ImageComponent />
          <ImageComponent />
        </StyledImageGrid>
      </StyledImageGrid>
    </StyledPage>
  );
};

export default Home;
