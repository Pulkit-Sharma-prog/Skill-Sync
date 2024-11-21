import PropTypes from 'prop-types'

function HollowButton(props) {
    
    return(
        <>
            <button className="hollow-button">{props.buttonName}</button>
        </>
    );
}

HollowButton.PropTypes = {
    buttonName: PropTypes.string
}

HollowButton.defaultProps = {
    buttonName: "Button"
}

export default HollowButton