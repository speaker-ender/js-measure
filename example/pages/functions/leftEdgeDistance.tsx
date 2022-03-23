import type { NextPage } from 'next'
import { leftEdgeDistance } from '../../../src/measure';
import DescriptionLayout from '../../components/layouts/documentation/description.layout';
import FunctionDemo from '../../components/positions/functionDemo';

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
            ]}>
            <FunctionDemo
                name="leftEdgeDistance"
                testCallback={(element) => {
                    return element ? `${leftEdgeDistance(element)}px` : ''
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

export default LeftEdgeDistance
