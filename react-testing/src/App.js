import React, { Component } from 'react';
import './app.scss';
import Header from "./components/header/header.js"
import Headline from "./components/headline/headline.js"

const tempArr = [{
  fName: "Joe",
  lName: "Bloggs",
  email: "joebloggs@gmail.com",
  age: 24,
  onlineStatus: true
}]


class App extends Component {
  render() { 
    return (
      <div>
          <Header />
          <section>
            <Headline header="Header" tempArr={tempArr} desc="Click the button to render posts" />
          </section>
      </div>
    );
  }
}



export default App;
