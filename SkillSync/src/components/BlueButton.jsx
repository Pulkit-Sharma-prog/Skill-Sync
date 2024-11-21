import PropTypes from 'prop-types'

function BlueButton(props) {
    
    return(
        <>
            <button className="blue-button">{props.buttonName}</button>
        </>
    );
}

BlueButton.PropTypes = {
    buttonName: PropTypes.string
}

BlueButton.defaultProps = {
    buttonName: "Button"
}

export default BlueButton