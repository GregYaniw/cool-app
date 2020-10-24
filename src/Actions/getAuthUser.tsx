export const getAuthUser = (user: any) => {
  console.log("getauthuser", user);

  return {
    type: "getAuthUser",
    state: user
      ? {
          id: user.uid,
          email: user.email,
        }
      : null,
  };
};
