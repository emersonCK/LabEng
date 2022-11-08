import React from "react"


class ComponentDidMount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor1: "red"};
      }
      componentDidMount() {
        setTimeout(() => {
          this.setState({favoritecolor1: "yellow"})
        }, 1000)
      }
      render() {
        return (
          <h1>My Favorite Color is {this.state.favoritecolor1}</h1>
        );
      }
}

export default ComponentDidMount;