const user = (function () {
  const privat = function() {
    console.log('I am privat');
  }
  return {
    sayHello: privat
  };
}());
user.sayHello();
