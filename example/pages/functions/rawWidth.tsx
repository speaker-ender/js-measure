import type { NextPage } from 'next'
import { rawWidth } from '../../../src/measure';
import DescriptionLayout from '../../components/layouts/documentation/description.layout';
import FunctionDemo from '../../components/positions/functionDemo';

const RawWidth: NextPage = () => {

    return (
        <DescriptionLayout
            functionName='rawWidth'
            parameters={[
                {
                    name: 'element',
                    type: 'Element'
                }
            ]}
            description={[
                'This is the raw width function for maximum performance'
            ]}
        >
            <FunctionDemo
                name="rawWidth"
                testCallback={(element) => {
                    return element ? `${rawWidth(element)}px` : ''
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

export default RawWidth
