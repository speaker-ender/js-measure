import type { NextPage } from 'next'
import { topEdgeDistance } from '../../../src/measure';
import DescriptionLayout from '../../components/layouts/documentation/description.layout';
import FunctionDemo from '../../components/positions/functionDemo';

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
                    type: "'document' | Element",
                    optional: true
                }
            ]}
            description={[
                'Fetches the distance of the top of the element passed to the function from the top of the viewport.', 'If `relativeTo` is passed `document`, it will use the distance from the top of the document.', 'If you pass any Element to `relativeTo`, it will return the distance between the top of `element` and the top of `relativeTo`.'
            ]}>
            <FunctionDemo
                name="topEdgeDistance"
                testCallback={(element) => {
                    return element ? `${topEdgeDistance(element)}px` : ''
                }}
                cssControls={[
                    {
                        label: 'Margin',
                        prop: 'margin',
                        unit: 'px',
                        value: { margin: '' }
                    },
                    {
                        label: 'Height',
                        prop: 'height',
                        unit: 'px',
                        value: { height: 'auto' }
                    },
                    {
                        label: 'Width',
                        prop: 'width',
                        unit: 'px',
                        value: { width: 'auto' }
                    }
                ]}
            />
        </DescriptionLayout>
    )
}

export default TopEdgeDistance
