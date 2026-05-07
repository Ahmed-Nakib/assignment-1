

const filterEvenNumbers = (numbers: number[]): number[] => {
    return numbers.filter(num => num % 2 === 0) 
}




const reverseString = (value: string): string => {
    let reversed = "";
    for(let i = value.length - 1; i >= 0; i--) {
        reversed += value[i]
    }

    return reversed;
}




const checkType = (value: string | number) => {
    if(typeof value === "string"){
        return "String";
    }else{
        return "Number";
    }
}





const getProperty = <T , K extends keyof T>(value: T , key: K)  => {
    return value[key]
}
const user = { id: 1, name: "John Doe", age: 21 };

getProperty(user, "name");





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






const getIntersection = (arr1: number[], arr2: number[]) => {
    const set = new Set(arr2);
    return arr1.filter(num => set.has(num))
}

