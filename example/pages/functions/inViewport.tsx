import type { NextPage } from 'next'
import DescriptionLayout from '../../components/layouts/documentation/description.layout';

const InViewport: NextPage = () => {

    return (
        <DescriptionLayout
            functionName='inViewport'
            parameters={[
                {
                    name: 'element',
                    type: 'Element'
                },
            ]}
            description={[
                'Returns `true` if all edges of the element passed to the function are inside of the viewport'
            ]}
        />
    )
}

export default InViewport
