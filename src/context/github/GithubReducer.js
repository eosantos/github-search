import { GET_USER, SET_LOADING, SEARCH_USERS } from "../types";

export default (state, { type, payload }) => {
  switch (type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
