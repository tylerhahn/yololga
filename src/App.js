import React, { Component } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import _ from "lodash";
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

  getSlugFromURL = slug => {
    const index = slug.indexOf("/", 2),
      string = slug.substring(index),
      project = string.replace("/", ""),
      { boxes } = this.state;
    if (index !== -1) {
      return _.find(boxes, { link: project });
    } else {
      return null;
    }
  };

  componentDidMount() {
    const { pathname } = this.props.location;
    this.setState({
      activeProject: this.getSlugFromURL(pathname)
    });
  }

  handleCallback = path => {
    const link = "/project/" + path;
    setTimeout(() => {
      this.props.history.push(link);
    }, 300);
  };

  handleClick = project => {
    console.log(project);
    this.setState(
      {
        activeProject: project
      },
      () => {
        this.handleCallback(project.link);
      }
    );
  };

  render() {
    const { activeProject, boxes } = this.state;

    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Gallery
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
              <Gallery
                boxes={boxes}
                activeProject={activeProject}
                handleClick={() => null}
                {...props}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
