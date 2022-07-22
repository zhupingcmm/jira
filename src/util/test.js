function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.sex = "male";

var p1 = new Person("zp", 18);

Student.prototype = p1;

function Student(school) {
  this.school = school;
}

var s1 = new Student("school");

const _instanceof = function (instance, c) {
  let proto = Object.getPrototypeOf(instance);
  while (proto) {
    console.log(proto);
    if (proto === c.prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return false;
};

console.log(_instanceof(s1, Person));

function foo() {
  console.log(this.name);
}
var tom = {
  name: "tom",
  foo,
};

var jack = {
  name: "jack",
  obj: tom,
};

jack.obj.foo();
