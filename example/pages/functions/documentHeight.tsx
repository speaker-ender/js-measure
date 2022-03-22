import type { NextPage } from 'next'
import { StyledPanel } from '../../global/panel.styles';
import { CodeTextStyle, Header2, StyledCode, StyledCodeHeader } from '../../global/typography';
import { StyledPage } from '../../global/page.styles';
import Paragraph from '../../components/content/paragraph';
import { StyledDivider } from '../../components/content/divider.styles';

const DocumentHeight: NextPage = () => {

    return (
        <StyledPage>
            <Header2><StyledCodeHeader>documentHeight()</StyledCodeHeader></Header2>
            <StyledPanel>
                <Paragraph text='Fetches the maximum height of your webpage by using the document body and the html element.' />
                <Paragraph text='Returns `0` if the document or html element do not exist.' />
            </StyledPanel>
        </StyledPage>
    )
}

export default DocumentHeight
