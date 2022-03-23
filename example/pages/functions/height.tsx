import type { NextPage } from 'next'
import { height } from '../../../src/measure';
import DescriptionLayout from '../../components/layouts/documentation/description.layout';
import FunctionDemo from '../../components/positions/functionDemo';

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
          type: 'boolean',
          optional: true,
        }
      ]}
      description={[
        'Fetches the height of the element passed to the function'
      ]}
    >
      <FunctionDemo
        name="height"
        testCallback={(element, includeMargin) => {
          return element ? `${height(element, includeMargin)}px` : ''
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

export default Height
