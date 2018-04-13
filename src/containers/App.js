import { connect } from "react-redux";
import App from "../App";
import * as actions from "../actions/index";

const mapStateToProps = state => {
  const tasks = this.props;
  return {
    // tasks: state.tasks
    tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTasks: () => {
      dispatch(actions.getTasks());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
