import PropTypes from 'prop-types'
import FeatureIcon from "../assets/icon.svg"

function KeyFeatureCard(props) {


    return(
        <>
            <div className="key-feature-card">
                <div className="feature-icon">
                    <img src={props.icon} alt="" />
                </div>
                <h6>{props.feature}</h6>
                <p>{props.description}</p>
            </div>
        </>
    );
}

KeyFeatureCard.PropTypes = {
    icon: PropTypes.img,
    feature: PropTypes.string,
    description: PropTypes.string,
}

KeyFeatureCard.defaultProps = {
    icon: FeatureIcon,
    feature: "Feature",
    description: "Description"
}


export default KeyFeatureCard