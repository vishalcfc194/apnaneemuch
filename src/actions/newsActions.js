export const fetchData = () => async (dispatch) => {
  const response = await fetch("/app.json");
  const data = await response.json();
  dispatch({
    type: "SET_DATA",
    payload: {
      news: data.news,
      ads: data.advertisement,
    },
  });
};
