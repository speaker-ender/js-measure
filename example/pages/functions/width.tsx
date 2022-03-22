import type { NextPage } from 'next'
import ImageComponent from '../../components/content/image';
import { StyledImageGrid } from '../../components/content/imageGrid.styles';
import { StyledPanel } from '../../global/panel.styles';
import { Header4 } from '../../global/typography';
import { StyledPage } from '../../global/page.styles';
import { StyledGridItem } from '../../components/grid.styles';
import ImageGrid from '../../components/content/imageGrid';
import Grid from '../../components/grid';
import Paragraph from '../../components/content/paragraph';

const Width: NextPage = () => {

    return (
        <StyledPage>
            <StyledPanel>
                <Header4>Width</Header4>
            </StyledPanel>
        </StyledPage>
    )
}

export default Width
