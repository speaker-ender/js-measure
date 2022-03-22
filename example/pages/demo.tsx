import type { NextPage } from 'next'
import ImageComponent from '../components/content/image';
import { StyledImageGrid } from '../components/content/imageGrid.styles';
import { StyledPanel } from '../global/panel.styles';
import { Header2 } from '../global/typography';
import { StyledPage } from '../global/page.styles';
import Paragraph from '../components/content/paragraph';

const Demo: NextPage = () => {

    return (
        <StyledPage>
            <Header2>Demo</Header2>
            <StyledPanel>
                <Paragraph text='Click on an image to measure it!' />
                <Paragraph text='If you tap the bug in the bottom right corner, you will bring up the debug panel where you can see all of the DOM values.' />
                <Paragraph text='You can also click the refresh button inside the debug panel to see if any of the values have changed.' />
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

export default Demo
