import React from "react"


class TesteShouldComponentUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor6: "red"};
      }
      shouldComponentUpdate() {
        return false;
      }
      changeColor = () => {
        this.setState({favoritecolor6: "blue"});
      }
      render() {
        return (
          <div>
          <h1>My Favorite Color is {this.state.favoritecolor6}</h1>
          <button type="button" onClick={this.changeColor}>Change color</button>
          </div>
        );
      }
}

export default TesteShouldComponentUpdate;
