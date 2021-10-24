import {log} from "util";

console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// 1/7 (without hometask. Was very hard for me. Even when I have looked answers.)
// + https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// + https://www.youtube.com/watch?v=BASquaxab_w
// + https://www.youtube.com/watch?v=uLY9GXGMXaA

// function Test() {
//     this.name = name
//     this.age = age
//     // this.sayHi = function () {}
// }
// Test.prototype.sayHi = function () {}

// class Test {
//     name: string
//     age: number
//     // testParam: any
//     // sayHi: Function
//     // arrow: Function
//     // bindSayHi: Function
//
//     constructor(name: string, age: number, param: any) {
//         this.name = name
//         this.age = age
//         //this.sayHi = function () {}
//         //this.arrow = () => {}
//         //this.bindSayHi = this.sayHi.bind(this)
//         // this.testParam = param
//     }
//
//     sayHi() {
//         console.log(this.name)
//     }
//
//     arrow = () => {}
//
// }
//
// // @ts-ignore
// Test.prototype.testParam = 10
//
// let obj = new Test('Briws',34, 0)
// let obj2 = new Test('Briws',34, 20)
// let obj3 = new Test('Briws',34, 50)
// console.log(obj)
// console.log(obj2)
// console.log(obj3)

// console.dir(function Test() {})
// console.dir(class Test{})

// class Test {
//     name: string
//
//     constructor(name: string) {
//         this.name = name
//     }
// }
//
// class Test2 extends Test {
//     age: number
//
//     constructor(name: string, age: number) {
//         super(name) // фактически ссылка на родительский конструктор. Он никогда не теряет контекст
//         this.age = age
//     }
// }
//
// let obj = new Test2('Yo',10)
// console.log(obj)

// class Test {
//     sayHi() {}
//     // когда нет конструктора, то от создаётся автоматически под капотом
// }
//
// class Test2 extends Test {
//     // name: string
//     // constructor(name: string) {
//     //     super();
//     //     this.name = name
//     // }
//     sayBye() {}
// }
//
// let obj = new Test2()
// console.log(obj)

// class Test {
//     name?: string
//     constructor(name?: string) {
//         this.name = name
//     }
//     sayHi() {}
// }
// let testObj = new Test('yo')
//
// class Test2 extends Test {
//     // name: string
//     age: number
//     constructor(name: string, age: number) {
//         super(name);
//         // this.name = name
//         this.age = age
//     }
//     sayBye() {}
// }

// interface ITest {
//     name: string,
//     age: number,
//     sayHi: Function,
// }
// interface ITest2 {
//     name: string,
//     city: string
// }
//
// class Test implements ITest, ITest2 {
//     name: string
//     age: number
//     city: string
//
//     constructor(name: string, age: number, city: string) {
//         this.name = name
//         this.age = age
//         this.city = city
//     }
//
//     sayHi() {}
//
//     sayBye() {}
// }

// class Test {
//     name: string
//
//     constructor(name: string) {
//         this.name = name
//     }
//
//     sayName() {
//         console.log(this.name)
//     }
//     testArrow = () => {
//         console.log('test')
//     }
// }
//
// class Test2 extends Test {
//     constructor(name: string) {
//         super(name);
//     }
//
//     sayName() {
//         console.log('yo yo yo')
//         super.sayName()
//     }
//
//     testArrow = () => {
//         console.log('yo')
//         // @ts-ignore
//         super.testArrow()
//         // @ts-ignore
//         // console.log(super.testParam)
//         console.log(this.testParam)
//     }
// }
//
// Test.prototype.testArrow = () => {
//     console.log('Prototype test')
// }
// // @ts-ignore
// Test.prototype.testParam = 0;
//
// let obj = new Test2('Briws')
// console.log(obj)
// // obj.sayName()
// obj.testArrow()

// class Test {
//     fullData: string
//
//     // public под капотом делает типизацию и присвоение. Упрощает типизацию.
//     constructor(public name: string, public age: number) {
//         this.fullData = this.name + ' -  ' + this.age
//     }
//
//
// }
//
// let obj = new Test('Briws', 33)
// console.log(obj)

// class Test {
//     private testParam = 10
//
//     constructor(public name: string, public age: number) { }
//
//     sayTestParam() {
//         console.log(this.testParam)
//     }
//
// }
//
// let obj = new Test('Briws', 33)

// console.log(obj)
// console.log(obj.testParam)

// class Test {
//     static testParam = 10
//     constructor(public name: string) {
//     }
//     sayName() {
//         console.log(this.name)
//     }
//     static sayNames(arr: Array<Test>) {
//         arr.forEach(console.log)
//     }
// }
//
// console.dir(Test)

class Test {
    private testParam = 0;

    get param() {
        return this.testParam
    }

    set param(value) {
        this.testParam = value
    }

    testMethod() {
        console.log(this.testParam)
    }
}

let obj = new Test()
obj.param = 50
console.log(obj.param)


// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.
let students = {
    name: '',
    surname: ''

}


// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?


// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {
};