# TypeScript Problem Solutions Summary

![TypeScript](https://img.shields.io/badge/TypeScript-Practice-blue?logo=typescript)
![Level](https://img.shields.io/badge/Level-Beginner--to--Intermediate-green)
![Status](https://img.shields.io/badge/Status-Completed-success)

এই ডকুমেন্টে দেওয়া হয়েছে ৭টি TypeScript সমস্যার সমাধান, প্রতিটির লজিক এবং ব্যবহৃত কনসেপ্ট ব্যাখ্যাসহ। এটি একটি practice-based learning notes হিসেবে তৈরি করা হয়েছে।

---

## 1. Filter Even Numbers

### Code

```ts
const filterEvenNumbers = (numbers: number[]): number[] => {
    return numbers.filter(num => num % 2 === 0);
}
```

### Logic

প্রতিটি সংখ্যার উপর modulus (`% 2`) ব্যবহার করে জোড় সংখ্যা বের করা হয়েছে।

### Concepts Used

* Array filter
* Callback function
* Conditional logic

---

## 2. Reverse String

### Code

```ts
const reverseString = (value: string): string => {
    let reversed = "";
    for (let i = value.length - 1; i >= 0; i--) {
        reversed += value[i];
    }
    return reversed;
}
```

### Logic

শেষ index থেকে শুরু করে প্রথম পর্যন্ত প্রতিটি character নতুন string এ যোগ করা হয়েছে।

### Concepts Used

* Loop iteration
* String manipulation
* Indexing

---

## 3. Type Guard Function

### Code

```ts
type StringOrNumber = string | number;

const checkType = (value: StringOrNumber) => {
    if (typeof value === "string") {
        return "String";
    } else {
        return "Number";
    }
}
```

### Logic

`typeof` ব্যবহার করে runtime টাইপ চেক করা হয়েছে।

### Concepts Used

* Union types
* Type guards
* typeof operator

---

## 4. Generic Property Getter

### Code

```ts
const getProperty = <T, K extends keyof T>(value: T, key: K) => {
    return value[key];
}
```

### Logic

Generic ব্যবহার করে যেকোনো object থেকে type-safe ভাবে property access করা হয়েছে।

### Concepts Used

* Generics
* keyof constraint
* Indexed access types

---

## 5. Toggle Read Status (Book)

### Code

```ts
interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

const toggleReadStatus = (book: Book) => {
    return {
        ...book,
        isRead: true
    }
}
```

### Logic

Existing object copy করে নতুন property `isRead` যোগ করা হয়েছে (immutable update)।

### Concepts Used

* Interface
* Spread operator
* Object immutability

---

## 6. Class Inheritance (Person & Student)

### Code

```ts
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
```

### Logic

Inheritance ব্যবহার করে Person class extend করা হয়েছে এবং Student class এ extra feature যোগ করা হয়েছে।

### Concepts Used

* OOP
* Inheritance
* Constructor
* Methods

---

## 7. Array Intersection

### Code

```ts
const getIntersection = (arr1: number[], arr2: number[]) => {
    const set = new Set(arr2);
    return arr1.filter(num => set.has(num));
}
```

### Logic

Second array কে Set এ convert করে fast lookup করা হয়েছে এবং common elements বের করা হয়েছে।

### Concepts Used

* Set data structure
* Filter method
* Time complexity optimization

---

## Summary

এই practice set এ মূলত শেখানো হয়েছে:

* TypeScript basic & advanced types
* Generics
* Interfaces
* OOP (Class & Inheritance)
* Array methods
* Performance optimization (Set usage)

এইগুলো TypeScript fundamentals strong করতে সাহায্য করবে এবং real-world coding patterns বোঝাতে সহায়তা করবে।
