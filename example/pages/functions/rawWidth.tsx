import type { NextPage } from 'next'
import DescriptionLayout from '../../components/layouts/documentation/description.layout';

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
        />
    )
}

export default RawWidth
