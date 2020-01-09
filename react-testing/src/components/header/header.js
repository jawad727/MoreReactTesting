import React from "react";
import './styles.scss';


const Header = (props) => {
    return (
        <header data-test="headerComponent" >
            <div className="wrap">
            <div className="logo">

                <h1 data-test="logoH1" >MyLogo</h1>

            </div>
            </div>
        </header>
    )
}




export default Header