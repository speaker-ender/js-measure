import type { NextPage } from 'next'
import DescriptionLayout from '../../components/layouts/documentation/description.layout';

const LeftEdgeDistance: NextPage = () => {

    return (
        <DescriptionLayout
            functionName='leftEdgeDistance'
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
                'Fetches the distance of the left of the element passed to the function from the top of the viewport.', 'If `relativeTo` is passed `document`, it will use the distance from the top of the document.', 'If you pass any Element to `relativeTo`, it will return the distance between the left of `element` and the left of `relativeTo`.'
            ]} />
    )
}

export default LeftEdgeDistance
