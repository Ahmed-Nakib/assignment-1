//solution 1:

const filterEvenNumbers = (num: number[]): number[] => {
    return num.filter(num => num % 2 === 0) 
}

// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));



//solution 2:

const reverseString = (value: string) => {
    let reversed = "";
    for(let i = value.length - 1; i >= 0; i--) {
        reversed += value[i]
    }

    return reversed;
}

// console.log(reverseString("typescript"));



//solution 3:

const checkType = (value: string | number) => {
    if(typeof value === "string"){
        return "string";
    }else if( typeof value === "number"){
        return "number";
    }
}

// console.log(checkType("Hello"));
// console.log(checkType(42));




//solution 4:


const getProperty = <T , K extends keyof T>(value: T , key: K)  => {
    return[key]
}
const user = { id: 1, name: "John Doe", age: 21 };

// console.log(getProperty(user, "name"));





//solution 5:

interface Book{
    title: string;
    author: string;
    publishedYear: number
}

const toggleReadStatus = (book: Book) => {
    return{
        ...book,
        isRead: true
    }
}

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };

console.log(toggleReadStatus(myBook));





//solutiin 6:


class Person {
    name : string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age
    }
}

class Student extends Person {
    grade : string;

    constructor(name: string, age: number, grade:string ){
        super(name, age);
        this.grade = grade;
    }

    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}

const student = new Student("Alice", 20, "A");


console.log(student.getDetails());





//solution 7:


const getIntersection = (arr1: number[], arr2: number[]) => {
    return arr1.filter((num) => arr2.includes(num))
}

console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
