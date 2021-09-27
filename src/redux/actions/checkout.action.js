const getUser = (userObj) => {
  return {
    type: "FETCH_USER",
    payload: userObj,
  };
};

export default {
  getUser,
};
