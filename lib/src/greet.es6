export default class Greeter {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    return "Hello " + this.name;
  }
}
