import type { NextPage } from 'next'
import DescriptionLayout from '../../components/layouts/documentation/description.layout';

const ScrollTopDistance: NextPage = () => {

    return (
        <DescriptionLayout functionName='scrollTopDistance' description={[
            'Fetches the distance of the viewport from the top of the page.',
            'Returns `0` if the window and document element do not exist.'
        ]} />
    )
}

export default ScrollTopDistance
