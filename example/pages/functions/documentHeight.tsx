import type { NextPage } from 'next'
import DescriptionLayout from '../../components/layouts/documentation/description.layout';

const DocumentHeight: NextPage = () => {

    return (
        <DescriptionLayout functionName='documentHeight' description={[
            'Fetches the maximum height of your webpage by using the document body and the html element.',
            'Returns `0` if the document or html element do not exist.'
        ]} />
    )
}

export default DocumentHeight
