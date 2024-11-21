import PropTypes from 'prop-types'

function HollowButtonLarge(props) {
    
    return(
        <>
            <button className="hollow-button-large">{props.buttonName}</button>
        </>
    );
}

HollowButtonLarge.PropTypes = {
    buttonName: PropTypes.string
}

HollowButtonLarge.defaultProps = {
    buttonName: "Button"
}

export default HollowButtonLarge