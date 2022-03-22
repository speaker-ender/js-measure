import type { NextPage } from 'next'
import { StyledPanel } from '../global/panel.styles';
import { Header2 } from '../global/typography';
import { StyledPage } from '../global/page.styles';
import Paragraph from '../components/content/paragraph';

const Home: NextPage = () => {

  return (
    <StyledPage>
      <Header2>JS Position Helpers</Header2>
      <StyledPanel>
        <Paragraph text='This package includes helper functions to querying the DOM more user friendly.' />
      </StyledPanel>
    </StyledPage>
  )
}

export default Home
