import React from "react"


class TesteGetDerivedStateFromProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor4: "red"};
      }
      static getDerivedStateFromProps(props, state) {
        return {favoritecolor4: props.favcol };
      }
      render() {
        return (
          <h1>My Favorite Color is {this.state.favoritecolor4}</h1>
        );
      }
}

export default TesteGetDerivedStateFromProps;