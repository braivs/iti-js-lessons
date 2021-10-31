// // console.dir(function () {})
// // console.dir(class Test{})
//
// function Test(name) {
//     this.name = name;
// }
//
// Test.prototype.sayHi = function () {}
//
// let obj = new Test('yo');
// let obj2 = new Test('yo2');
// console.dir(Test);
//
// // console.log(obj.__proto__ === Test.prototype);
// // let objProto = Object.getPrototypeOf(obj);
// // console.log('objProto',objProto)
// // console.log(objProto === Test.prototype);
// // console.log((obj.__proto__ === Test.prototype) && (obj2.__proto__ === Test.prototype) &&
// //     obj.__proto__ === obj2.__proto__);
//
// obj2.__proto__.testFunc = function () {
//     console.log('Hi')
// }
//
// console.log('obj',obj);
// console.log('obj2',obj2);
// console.dir(Test)
//
// obj.testFunc()

// Array.prototype.someFunc = function () {
//     console.log('Test')
// };
//
// [].someFunc();

// let potentialProto = {
//     name: 'Yo',
//     sayName: function () {
//         console.log('potentialProto sayName', this.name)
//     }
// }
//
// let regularObj = {
//     name: 'Evgen'
// }
//
// console.log('potentialProto',potentialProto)
// console.log('regularObj',regularObj)
//
// regularObj.__proto__ = potentialProto
//
// regularObj.sayName();

// class regularMixinss {
//     constructor() {
//     }
//     sayBye() {
//         console.log('Bye bye')
//     }
// }
//
// class Test extends regularMixinss{
//     constructor(name) {
//         super()
//         this.name = name
//     }
//     sayName() {
//         console.log(this.name)
//     }
// }
//
// let testObj = new Test('yo')
// console.log(testObj)
//
// testObj.sayBye()

// let testObj = { }
// testObj.__proto__ = null
// let testObj = Object.create(null)
// console.log(testObj)

// console.log(console)

// class Test{
//     constructor(name) {
//         this.name = name
//     }
//
//     sayName() {}
// }
//
// Test.prototype = null
//
// class SuperTest extends Text {
//     constructor(name) {
//         super(name);
//     }
//
//     sayBye() {}
// }
//
// let sObj = new TestExample('Yoyo')
// console.log(sObj)
//
// function  TestExample(name) {
//     this.name = name
// }
//
// // console.dir(TestExample)
//
// TestExample.prototype.sayName = function () {
//
// }

// TestExample.prototype = null

// let teObj = new TestExample('Yoyo')
// console.log(teObj)
//
// function SuperTestExample(name, age) {
//     TestExample.call(this, name)
//     this.age = age
// }
//
// // SuperTestExample.prototype = Object.create(TestExample.prototype, {sayBye: {value: function () {}}, constructor: {value: SuperTestExample}})
// SuperTestExample.prototype = Object.create(TestExample.prototype)
// SuperTestExample.prototype.constructor = SuperTestExample
// SuperTestExample.prototype.sayBla = function () {}
//
// let steObj = new SuperTestExample('Bla',20)
// console.log(steObj)
// console.dir(SuperTestExample)
//
// console.log(steObj instanceof SuperTestExample)
// console.log(steObj instanceof TestExample)

Function.prototype.customBind = function (ctx, ...args) {
    console.log(this === obj2.sayName)
    let self = this; //let globalFunc = obj2.sayName(); see below
    return function (...args2) {
        return self.apply(ctx, [...args, ...args2])
    }
}

Function.prototype._bind = function (ctx, ...args) {
    debugger
    ctx.___someStrangeKey____ = this;
    return function (...args2) {
        return ctx.___someStrangeKey____(...args, ...args2)
    }
}

var obj = {name: 'Briws'};
var obj3 = {name: 'Helen'};
var obj2 = {name: 'Hanna', sayName() { console.log(this.name)}}

obj2.sayName.customBind(obj)()
//obj2.sayName._bind(obj)._bind(obj3)