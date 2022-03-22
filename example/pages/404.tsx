import type { NextPage } from 'next'
import { StyledPanel } from '../global/panel.styles';
import { Header3, Header4 } from '../global/typography';
import { StyledPage } from '../global/page.styles';

const Custom404: NextPage = () => {

    return (
        <StyledPage>
            <StyledPanel>
                <Header4>404</Header4>
                <Header3>Are You Lost?</Header3>
            </StyledPanel>
        </StyledPage>
    )
}

export default Custom404
