import type { NextPage } from 'next'
import DescriptionLayout from '../../components/layouts/documentation/description.layout';

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
        />
    )
}

export default RawHeightWithMargin
