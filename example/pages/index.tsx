import type { NextPage } from 'next'
import ImageComponent from '../components/image';
import { StyledImageGrid } from '../components/imageGrid.styles';
import { StyledComponentPositionElement } from '../components/positions/componentPosition.styles';
import { Header4, Paragraph } from '../global/typography';
import { StyledPage } from './page.styles';

const Home: NextPage = () => {

  return (
    <StyledPage>
      <Header4>Directions</Header4>
      <Paragraph>Click an Image to See It's Calcuated Position</Paragraph>
      <Paragraph>Click the 'Refresh' button to refresh all calculations</Paragraph>
      <StyledComponentPositionElement>
        <ImageComponent isTargetElement={true}></ImageComponent>
      </StyledComponentPositionElement>
      <StyledImageGrid>
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
        <ImageComponent />
      </StyledImageGrid>
      <ImageComponent />
      <ImageComponent />
      <ImageComponent />
      <ImageComponent />
    </StyledPage>
  )
}

export default Home
