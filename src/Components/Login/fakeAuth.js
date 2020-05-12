const fakeAuth = {
  isAuthenticated: !(!localStorage),
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    localStorage.clear()
    setTimeout(cb, 100);
  }
};

export default fakeAuth;

