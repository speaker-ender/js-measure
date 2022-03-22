import type { NextPage } from 'next'
import ImageComponent from '../components/content/image';
import { StyledImageGrid } from '../components/content/imageGrid.styles';
import { StyledPanel } from '../global/panel.styles';
import { Header4 } from '../global/typography';
import { StyledPage } from '../global/page.styles';
import { StyledGridItem } from '../components/grid.styles';
import ImageGrid from '../components/content/imageGrid';
import Grid from '../components/grid';
import Paragraph from '../components/content/paragraph';

const Home: NextPage = () => {

  return (
    <StyledPage>
      <StyledPanel>
        <Header4>Directions</Header4>
        <Paragraph text='Click an Image to See Its Calcuated Position' />
        <Paragraph text='Click the Refresh button to refresh all calculations' />
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
