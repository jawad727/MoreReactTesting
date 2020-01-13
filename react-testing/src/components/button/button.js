import React, {Component} from "react"
import PropTypes from "prop-types";

class SharedButton extends Component {

    render() {

        return(
            <button data-test="buttonComponent">

            </button>
        )
    }
}

SharedButton.propTypes = {
    buttonText: PropTypes.string,
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func
}

export default SharedButton