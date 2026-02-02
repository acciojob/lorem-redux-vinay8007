const initialState = {
    loading: false,
    data: [],
  };
  
  const loremReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_LOREM_REQUEST":
        return { ...state, loading: true };
  
      case "FETCH_LOREM_SUCCESS":
        return { loading: false, data: action.payload };
  
      case "FETCH_LOREM_FAILURE":
        return { loading: false, data: [] };
  
      default:
        return state;
    }
  };
  
  export default loremReducer;
  