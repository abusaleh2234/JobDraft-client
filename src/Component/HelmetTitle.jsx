import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';



const HelmetTitle = ({title}) => {
    return (
        <Helmet>
            <title>{`JobDraft || ${title}`}</title>
        </Helmet>
    );
};
HelmetTitle.propTypes = {
    title:PropTypes.string,
}
export default HelmetTitle;