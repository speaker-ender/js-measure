import type { NextPage } from 'next'
import DescriptionLayout from '../../components/layouts/documentation/description.layout';

const ScrollLeftDistance: NextPage = () => {

    return (
        <DescriptionLayout functionName='scrollLeftDistance' description={[
            'Fetches the distance of the viewport from the top of the page.',
            'Returns `0` if the window and document element do not exist.'
        ]} />
    )
}

export default ScrollLeftDistance
