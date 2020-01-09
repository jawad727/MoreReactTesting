import React, {Component} from "react";
import "./headline.scss";
import PropTypes from "prop-types";

class Headline extends Component {
    state = {

    }

    render() {

        if (!this.props.header){
            return null
        }

        return (
            <div className="headLine" data-test="HeadlineComponent">
                <h1 data-test="header">{this.props.header}</h1>
                <p data-test="desc">
                    {this.props.desc}
                </p>
            </div>
        )
    }
}


Headline.propTypes = { // This says that the value of both of those props must match or it will throw a console error
    header: PropTypes.string,
    desc: PropTypes.string,
    tempArr: PropTypes.arrayOf(PropTypes.shape({
        fName: PropTypes.string,
        lName: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number,
        onlineStatus: PropTypes.bool
    }))
  }

export default Headline