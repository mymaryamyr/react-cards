function getlocalStorage () {
  if (localStorage.getItem("username") &&
      localStorage.getItem("mobile")
  ) return true
  else {
    return false
  }
}

const fakeAuth = {
  isAuthenticated: getlocalStorage(),
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    localStorage.removeItem("username")
    localStorage.removeItem("mobile")
    setTimeout(cb, 100);
  }
};

export default fakeAuth;

