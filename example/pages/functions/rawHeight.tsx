import type { NextPage } from 'next'
import DescriptionLayout from '../../components/layouts/documentation/description.layout';

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
        />
    )
}

export default RawHeight
