import React, {Component} from "react"
import PropTypes from "prop-types";

class SharedButton extends Component {

    submitEvent() {
        if (this.props.emitEvent) {
            this.props.emitEvent()
        }
    }

    render() {
        const {buttonText} = this.props;

        return(
            <button onClick={() => { this.submitEvent() }} data-test="buttonComponent">
                Get Posts
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