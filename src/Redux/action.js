import * as types from "./actionTypes";
import axios from "axios";

export const getData = () => (dispatch) => {
  dispatch({ type: types.GET_DATA_REQUEST });
  axios
    .get(`https://mocktestjsonserver.herokuapp.com/user`)
    .then((r) => dispatch({ type: types.GET_DATA_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: types.GET_DATA_FAILURE }));
};

//updating the data

export const updataScore = (payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_SCORE_REQUEST });
  axios
    .patch(
      `https://mocktestjsonserver.herokuapp.com/user/${payload.id}`,
      payload.score
    )
    .then((r) =>
      dispatch({ type: types.UPDATE_SCORE_SUCCESS, payload: r.data })
    )
    .catch((e) => dispatch({ type: types.UPDATE_SCORE_FAILURE }));
};

//getting random data

export const getRandom = () => (dispatch) => {
  dispatch({ type: types.GET_RANDOM_DATA_REQUEST });
  axios
    .get(`https://api.api-ninjas.com/v1/randomword`)
    .then((r) =>
      dispatch({ type: types.GET_RANDOM_DATA_SUCCESS, payload: r.data.word })
    )

    .catch((e) => dispatch({ type: types.GET_RANDOM_DATA_FAILURE }));
};

//adding new data to server
export const addData = (params) => (dispatch) => {
  dispatch({ type: types.ADD_DATA_REQUEST });
  return axios
    .post(`https://mocktestjsonserver.herokuapp.com/user`, params)
    .then((r) => dispatch({ type: types.ADD_DATA_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: types.ADD_DATA_FAILURE }));
};
