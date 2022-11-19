import { Helmet } from 'react-helmet';

export const MetaData = ({ title }) => {
    return (
        <Helmet>
            <title>{`${title} - ABRYA TV Shop`}</title>
        </Helmet>
    )
}