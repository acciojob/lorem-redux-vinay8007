export const FETCH_LOREM_REQUEST = "FETCH_LOREM_REQUEST";
export const FETCH_LOREM_SUCCESS = "FETCH_LOREM_SUCCESS";
export const FETCH_LOREM_FAILURE = "FETCH_LOREM_FAILURE";

export const fetchLorem = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_LOREM_REQUEST });

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const result = await response.json();

      // TAKE 8 ITEMS
      const cards = result.slice(0, 8);

      dispatch({
        type: FETCH_LOREM_SUCCESS,
        payload: cards, 
      });
    } catch (error) {
      console.error("API ERROR:", error);

      dispatch({
        type: FETCH_LOREM_FAILURE,
      });
    }
  };
};
