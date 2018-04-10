import { ADD_ARTICLE } from "../constants/action-types";
import axios from "axios";
export const addArticle = article => ({
  type: ADD_ARTICLE,
  payload: article
});

export const getTaskList = userSyncID => dispatch => {
  dispatch(isLoading(`GET_TASK_LIST`, true));
  Model._get(`/syncs/${userSyncID}`, null).then(response => {
    console.log(response);
  });
};
