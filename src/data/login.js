export const login = {
  authorization: false,
  login: function() {
    this.authorization = true;
    console.log("Looged");
  },
  logout: () => (this.authorization = false)
};
