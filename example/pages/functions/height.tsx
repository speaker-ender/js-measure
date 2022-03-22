import type { NextPage } from 'next'
import DescriptionLayout from '../../components/layouts/documentation/description.layout';

const Height: NextPage = () => {

  return (
    <DescriptionLayout
      functionName='height'
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
        'Fetches the height of the element passed to the function'
      ]}
    />
  )
}

export default Height
