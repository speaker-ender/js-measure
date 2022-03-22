import type { NextPage } from 'next'
import { StyledPanel } from '../../global/panel.styles';
import { Header2, StyledCodeHeader } from '../../global/typography';
import { StyledPage } from '../../global/page.styles';
import Paragraph from '../../components/content/paragraph';

const Height: NextPage = () => {

  return (
    <StyledPage>
      <Header2><StyledCodeHeader>height()</StyledCodeHeader></Header2>
      <StyledPanel>
        <Paragraph text='Click an Image to See Its Calcuated Position' />
        <Paragraph text='Click the Refresh button to refresh all calculations' />
      </StyledPanel>
    </StyledPage>
  )
}

export default Height
