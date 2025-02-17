const assert = require('assert'); 
const app = require("../index");

describe( "", () => { 
  it("App should return Hello", function () {
    assert.equal(app.sayHello(), "hello");
  });

  it("App should call add method with one number", function () {
    assert.equal(app.add(1), 1);
  });

  it("App should call add method with one comma seprated numbers", function () {
    assert.equal(app.add("1,2",","), 3);
  });

  it("Add Method Should Handle new line", function () {
    assert.equal(app.add("1\n2,3",","), 6);
  });

  it("Add Method Should Support different delimiters", function () {
    assert.equal(app.add("//;\n1;2", ";"), 3);
  });

  it("Add Method Should Not Support negative Number", function () {
    assert.equal(app.add("1,-2,5,-7", ","), 6);
  });
  
   
}); 