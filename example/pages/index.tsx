import type { NextPage } from 'next'
import ImageComponent from '../components/image';
import { StyledComponentPositionElement } from '../components/positions/componentPosition.styles';

const Home: NextPage = () => {

  return (
    <div>
      <StyledComponentPositionElement>
        <ImageComponent isTargetElement={true}></ImageComponent>
      </StyledComponentPositionElement>
      <ImageComponent />
      <ImageComponent />
      <ImageComponent />
      <ImageComponent />
    </div>
  )
}

export default Home
