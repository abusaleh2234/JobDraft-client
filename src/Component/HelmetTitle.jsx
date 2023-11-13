import { Helmet } from "react-helmet";


const HelmetTitle = ({title}) => {
    return (
        <Helmet>
            <title>{`JobDraft || ${title}`}</title>
        </Helmet>
    );
};

export default HelmetTitle;