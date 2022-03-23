import type { NextPage } from 'next'
import { rawHeightWithMargin } from '../../../src/measure';
import DescriptionLayout from '../../components/layouts/documentation/description.layout';
import FunctionDemo from '../../components/positions/functionDemo';

const RawHeightWithMargin: NextPage = () => {

    return (
        <DescriptionLayout
            functionName='rawHeightWithMargin'
            parameters={[
                {
                    name: 'element',
                    type: 'Element'
                }
            ]}
            description={[
                'This is the raw height with margin function for maximum performance'
            ]}
        >
            <FunctionDemo
                name="rawHeightWithMargin"
                testCallback={(element) => {
                    return element ? `${rawHeightWithMargin(element)}px` : ''
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

export default RawHeightWithMargin
