import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class HomeButton extends React.Component {
  handleGoHome = () => {
    const { history } = this.props;
    history.push("/");
  };

  render() {
    return <button onClick={this.handleGoHome}>logout</button>;
  }
}

HomeButton.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(HomeButton);
