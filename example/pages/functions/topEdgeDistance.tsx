import type { NextPage } from 'next'
import DescriptionLayout from '../../components/layouts/documentation/description.layout';

const TopEdgeDistance: NextPage = () => {

    return (
        <DescriptionLayout
            functionName='topEdgeDistance'
            parameters={[
                {
                    name: 'element',
                    type: 'Element'
                },
                {
                    name: 'relativeTo',
                    type: "'document' | Element"
                }
            ]}
            description={[
                'Fetches the distance of the top of the element passed to the function from the top of the viewport.', 'If `relativeTo` is passed `document`, it will use the distance from the top of the document.', 'If you pass any Element to `relativeTo`, it will return the distance between the top of `element` and the top of `relativeTo`.'
            ]} />
    )
}

export default TopEdgeDistance
