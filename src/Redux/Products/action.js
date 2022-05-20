import axios from "axios";

export const DATA_LOADING = "DATA_LOADING";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_FAILURE = "DATA_FAILURE";

export const dataLoading = () => ({
  type: DATA_LOADING,
});
export const dataSuccess = (payload) => ({
  type: DATA_SUCCESS,
  payload,
});
export const dataFailure = () => ({
  type: DATA_FAILURE,
});

export const getData = () => (dispatch) => {
  dispatch(dataLoading());
  axios
    .get("http://localhost:8080/products")
    .then(({ data }) => {
      dispatch(dataSuccess(data));
    })
    .catch((err) => dispatch(dataFailure()));
};
