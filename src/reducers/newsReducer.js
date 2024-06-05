const initialState = {
  news: [],
  ads: [],
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        news: action.payload.news,
        ads: action.payload.ads,
      };
    default:
      return state;
  }
};

export default newsReducer;
