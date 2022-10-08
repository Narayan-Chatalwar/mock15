import * as types from "./actionTypes";

const initstate = {
  appdata: [],
  randomdata:"",
  isLoading: false,
  isError: false,
};

export const reducer = (state = initstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_DATA_SUCCESS:
      return {
        ...state,
        appdata: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };







      case types.UPDATE_SCORE_REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case types.UPDATE_SCORE_SUCCESS:
        return {
          ...state,
          appdata: payload,
          isLoading: false,
          isError: false,
        };
      case types.UPDATE_SCORE_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };






      case types.GET_RANDOM_DATA_REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case types.GET_RANDOM_DATA_SUCCESS:
        return {
          ...state,
          randomdata: payload,
          isLoading: false,
          isError: false,
        };
      case types.GET_RANDOM_DATA_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
  

    //   case types.ADD_DATA_REQUEST:
    //     return {
    //       ...state,
    //       isLoading: true,
    //       isError: false,
    //     };
    //   case types.ADD_DATA_SUCCESS:
    //     return {
    //       ...state,
    //       appdata: payload,
    //       isLoading: false,
    //       isError: false,
    //     };
    //   case types.ADD_DATA_FAILURE:
    //     return {
    //       ...state,
    //       isLoading: false,
    //       isError: true,
    //     };

    default:
      return state;
  }
};