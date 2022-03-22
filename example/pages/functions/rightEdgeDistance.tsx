import type { NextPage } from 'next'
import DescriptionLayout from '../../components/layouts/documentation/description.layout';

const RightEdgeDistance: NextPage = () => {

    return (
        <DescriptionLayout
            functionName='rightEdgeDistance'
            parameters={[
                {
                    name: 'element',
                    type: 'Element'
                },
                {
                    name: 'relativeTo',
                    type: "'document' | Element",
                    optional: true
                }
            ]}
            description={[
                'Fetches the distance of the right of the element passed to the function from the top of the viewport.', 'If `relativeTo` is passed `document`, it will use the distance from the top of the document.', 'If you pass any Element to `relativeTo`, it will return the distance between the right of `element` and the right of `relativeTo`.'
            ]} />
    )
}

export default RightEdgeDistance
