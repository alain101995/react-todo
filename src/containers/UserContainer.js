import { connect } from "react-redux";
import Users from "../components/Users/Users"; // Component where props will be sent.
import * as actions from "../actions/index";

const mapStateToProps = state => {
  const users = state;
  return {
    users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => {
      dispatch(actions.getUsers());
    },
    createUser: () => {
      dispatch(actions.createUsers());
    },
    deleteUsers: () => {
      dispatch(actions.deleteUsers());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
