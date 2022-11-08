import React from "react"


class ComponentDidUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor2: "red"};
      }
      componentDidMount() {
        setTimeout(() => {
          this.setState({favoritecolor2: "yellow"})
        }, 1000)
      }
      componentDidUpdate() {
        document.getElementById("mydiv").innerHTML =
        "The updated favorite is " + this.state.favoritecolor2;
      }
      render() {
        return (
          <div>
          <h1>My Favorite Color is {this.state.favoritecolor2}</h1>
          <div id="mydiv"></div>
          </div>
        );
      }
}

export default ComponentDidUpdate;