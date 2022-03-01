import type { NextPage } from 'next'
import ImageComponent from '../components/image';
import { StyledImageGrid } from '../components/imageGrid.styles';
import { StyledPanel } from '../components/panel.styles';
import { Header4, Paragraph } from '../global/typography';
import { StyledPage } from '../global/page.styles';

const Home: NextPage = () => {

  return (
    <StyledPage>
      <StyledPanel>
        <Header4>Directions</Header4>
        <Paragraph>Click an Image to See It&aposs Calcuated Position</Paragraph>
        <Paragraph>Click the &aposRefresh&apos button to refresh all calculations</Paragraph>
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
      <StyledImageGrid columns={1}>
        <ImageComponent />
        <ImageComponent />
      </StyledImageGrid>
    </StyledPage>
  )
}

export default Home
