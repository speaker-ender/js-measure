import type { NextPage } from 'next'
import DescriptionLayout from '../../components/layouts/documentation/description.layout';

const RawWidthWithMargin: NextPage = () => {

    return (
        <DescriptionLayout
            functionName='rawWidthWithMargin'
            parameters={[
                {
                    name: 'element',
                    type: 'Element'
                }
            ]}
            description={[
                'This is the raw width with margin function for maximum performance'
            ]}
        />
    )
}

export default RawWidthWithMargin
