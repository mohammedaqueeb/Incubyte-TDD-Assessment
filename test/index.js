const assert = require('assert'); 
const app = require("../index");

describe( "", () => { 
  it("App should return Hello", function () {
    assert.equal(app.sayHello(), "hello");
  });

  // it("App should call add method with string Value", function () {
  //   assert.equal(app.add("hello"), "hello");
  // });

  it("App should call add method with one number", function () {
    assert.equal(app.add(1), 1);
  });

  it("App should call add method with one comma seprated numbers", function () {
    assert.equal(app.add("1,2"), 3);
  });
  
   
}); 