export default (
  state = {},
  payload: { type: string; state: { id: string; email: string } }
) => {
  switch (payload.type) {
    case "getAuthUser":
      state = payload.state;
  }
  return state;
};
