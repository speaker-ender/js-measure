import type { NextPage } from 'next'
import DescriptionLayout from '../../components/layouts/documentation/description.layout';

const WindowWidth: NextPage = () => {

    return (
        <DescriptionLayout functionName='windowWidth' description={[
            'Fetches the width of the window.',
            'Returns `0` if the window and document element do not exist.'
        ]} />
    )
}

export default WindowWidth
