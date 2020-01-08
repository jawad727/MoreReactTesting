import React, {Component} from "react"
import "./headline.scss"

class Headline extends Component {
    state = {

    }

    render() {

        if (!this.props.header){
            return null
        }

        return (
            <div className="headLine" data-test="HeadlineComponent">
                <h1 data-test="header">Header</h1>
                <p data-test="desc">
                    {this.props.desc}
                </p>
            </div>
        )
    }
}

export default Headline