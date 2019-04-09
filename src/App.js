import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import Post from "./components/Post";
import { Route, Switch, withRouter } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeProject: null,
      boxes: [
        {
          title: "A",
          link: "alligator",
          image: "https://source.unsplash.com/random",
          content: "Post content"
        },
        {
          title: "B",
          link: "bee",
          image: "https://source.unsplash.com/user/erondu",
          content: "Post content"
        },
        {
          title: "C",
          link: "cat",
          image: "https://source.unsplash.com/user/kirstenyoung",
          content: "Post content"
        }
      ]
    };
  }

  handleCallback = path => {
    const link = "/project/" + path;
    setTimeout(() => {
      this.props.history.push(link);
    }, 300);
  };

  handleClick = (project, path) => e => {
    this.setState(
      {
        activeProject: project
      },
      () => {
        this.handleCallback(path);
      }
    );
  };

  resetActiveProject() {
    this.setState({
      activeProject: null
    });
  }

  render() {
    const { activeProject, boxes } = this.state;
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home
                boxes={boxes}
                activeProject={activeProject}
                handleClick={this.handleClick}
                {...props}
              />
            )}
          />
          <Route
            path="/project/:id"
            render={props => (
              <Post boxes={boxes} handleClick={this.handleClick} {...props} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
