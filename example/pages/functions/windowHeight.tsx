import type { NextPage } from 'next'
import DescriptionLayout from '../../components/layouts/documentation/description.layout';

const WindowHeight: NextPage = () => {

    return (
        <DescriptionLayout functionName='windowHeight' description={[
            'Fetches the height of the window.',
            'Returns `0` if the window and document element do not exist.'
        ]} />
    )
}

export default WindowHeight
