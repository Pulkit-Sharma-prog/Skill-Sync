import PropTypes from 'prop-types'

function BlueButtonLarge(props) {
    
    return(
        <>
            <button className="blue-button-large">{props.buttonName}</button>
        </>
    );
}

BlueButtonLarge.PropTypes = {
    buttonName: PropTypes.string
}

BlueButtonLarge.defaultProps = {
    buttonName: "Button"
}

export default BlueButtonLarge