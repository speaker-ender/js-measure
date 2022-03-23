import type { NextPage } from 'next'
import { width } from '../../../src/measure';
import DescriptionLayout from '../../components/layouts/documentation/description.layout';
import FunctionDemo from '../../components/positions/functionDemo';

const Width: NextPage = () => {

    return (
        <DescriptionLayout
            functionName='width'
            parameters={[
                {
                    name: 'element',
                    type: 'Element'
                },
                {
                    name: 'includeMargin',
                    type: 'boolean'
                }
            ]}
            description={[
                'Fetches the width of the element passed to the function'
            ]}
        >
            <FunctionDemo
                name="width"
                testCallback={(element, includeMargin) => {
                    return element ? `${width(element, includeMargin)}px` : ''
                }}
                parameters={[{
                    name: 'includeMargin',
                    type: 'boolean',
                    value: false,
                }]}
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

export default Width
