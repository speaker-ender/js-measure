import type { NextPage } from 'next'
import ImageComponent from '../components/content/image';
import { StyledImageGrid } from '../components/content/imageGrid.styles';
import { StyledPanel } from '../global/panel.styles';
import { Header2 } from '../global/typography';
import { StyledPage } from '../global/page.styles';
import Paragraph from '../components/content/paragraph';

const Home: NextPage = () => {

  return (
    <StyledPage>
      <Header2>JS Position Helpers</Header2>
      <StyledPanel>
        <Paragraph text='Click an Image to See Its Calcuated Position' />
      </StyledPanel>
    </StyledPage>
  )
}

export default Home
