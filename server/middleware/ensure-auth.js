module.exports = function *(next) {  
  if (this.isAuthenticated()) {
    yield next;
  } else {
    this.status = 401;
  }
};