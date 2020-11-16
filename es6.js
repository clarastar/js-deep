class Triple {
  static customName = 'Tripler';
  static description = 'I triple any number you provide';
  static triple(n = 1) {
    return n * 3;
  }
}

class BiggerTripple extends Triple {
  static longDescription;
  static description = 'I square the triple of any number you provide';
  static triple(n) {
    return super.triple(n) * super.triple(n);
  }
}

console.log(Triple.description)
console.log(Triple.triple())
console.log(Triple.triple(6))


console.log(BiggerTripple.description)
console.log(BiggerTripple.triple())
console.log(BiggerTripple.triple(6))

class StaticMethodCall {
  static staticProperty = 'static property';
  static staticMethod() {
    return 'Static method and ' + this.staticProperty + ' has been called';
  }
  static anotherStaticMethod() {
    return this.staticMethod() + ' from another static method';
  }
}
StaticMethodCall.staticMethod(); 
// 'Static method and static property has been called'

StaticMethodCall.anotherStaticMethod(); 
// 'Static method and static property has been called from another static method'
