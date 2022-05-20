import { DATA_LOADING, DATA_SUCCESS, DATA_FAILURE } from "./action";
const initState = {
  loading: false,
  error: false,
  data: [],
};
export const dataReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case DATA_LOADING: {
      return {
        ...store,
        loading: true,
      };
    }
    case DATA_SUCCESS: {
      return {
        ...store,
        data : [...payload],
        loading: false,
        error: false,
      };
    }
    case DATA_FAILURE: {
      return {
        ...store,
        loading: false,
        error: true,
      };
    }
    default:
      return store;
  }
};
