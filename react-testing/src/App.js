import React from 'react';
import './app.scss';
import Header from "./components/header/header.js"
import Headline from "./components/headline/headline.js"

function App() {
  return (
    <div>
        <Header />
        <section>
          <Headline header="Posts" desc="Click the button to render posts" />
        </section>
    </div>
  );
}

export default App;
