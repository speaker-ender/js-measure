import type { NextPage } from 'next'
import ImageComponent from '../../components/content/image';
import { StyledImageGrid } from '../../components/content/imageGrid.styles';
import { StyledPanel } from '../../global/panel.styles';
import { Header2, Header3, Header4 } from '../../global/typography';
import { StyledPage } from '../../global/page.styles';
import { StyledGridItem } from '../../components/grid.styles';
import ImageGrid from '../../components/content/imageGrid';
import Grid from '../../components/grid';
import Paragraph from '../../components/content/paragraph';

const Height: NextPage = () => {

  return (
    <StyledPage>
      <Header2>Height</Header2>
      <StyledPanel>
        <Paragraph text='Click an Image to See Its Calcuated Position' />
        <Paragraph text='Click the Refresh button to refresh all calculations' />
      </StyledPanel>
    </StyledPage>
  )
}

export default Height
