import type { NextPage } from 'next'
import { rawHeight } from '../../../src/measure';
import DescriptionLayout from '../../components/layouts/documentation/description.layout';
import FunctionDemo from '../../components/positions/functionDemo';

const RawHeight: NextPage = () => {

    return (
        <DescriptionLayout
            functionName='rawHeight'
            parameters={[
                {
                    name: 'element',
                    type: 'Element'
                }
            ]}
            description={[
                'This is the raw height function for maximum performance'
            ]}
        >
            <FunctionDemo
                name="rawHeight"
                testCallback={(element) => {
                    return element ? `${rawHeight(element)}px` : ''
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

export default RawHeight
