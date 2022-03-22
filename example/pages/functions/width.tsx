import type { NextPage } from 'next'
import DescriptionLayout from '../../components/layouts/documentation/description.layout';

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
        />
    )
}

export default Width
