import React, { Component } from 'react';
import './app.scss';
import Header from "./components/header/header.js"
import Headline from "./components/headline/headline.js"
import ListItem from "./components/listItem/ListItem"
import SharedButton from "./components/button/button"
import { connect } from "react-redux"
import { fetchPosts } from "./actions/index.js"

const tempArr = [{
  fName: "Joe",
  lName: "Bloggs",
  email: "joebloggs@gmail.com",
  age: 24,
  onlineStatus: true
}]


class App extends Component {

  constructor(props){
    super(props);
    this.fetch = this.fetch.bind(this)
  }

  fetch() {
    this.props.fetchPosts();
  }



  render() {
    
    const {posts} = this.props

    const configButton = {
      buttonText: "Get posts",
      emitEvent: this.fetch
    }

    return (
      <div className="mainWrapper">
          <Header />
          <section>
            <Headline header="Header" tempArr={tempArr} desc="Click the button to render posts" />
            <SharedButton {...configButton} />
            {posts.length > 0 && 
              <div>
                {posts.map((post, index) => {
                  const {title, body} = post;
                  const configListItem = {
                    title, 
                    desc: body
                  }
                  return <ListItem key={index} {...configListItem} />
                })}
              </div>
                }
          </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(App);
