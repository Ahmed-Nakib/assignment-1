TypeScript Generics: Reusable এবং Strictly Typed Code

TypeScript-এ Generics এমন একটি শক্তিশালী ফিচার যা আমাদের flexible কিন্তু type-safe code লেখার সুযোগ দেয়। এর মাধ্যমে আমরা এমন function বা component তৈরি করতে পারি যা যেকোনো ধরনের data এর সাথে কাজ করতে পারে, কিন্তু TypeScript এর type safety কোনোভাবেই নষ্ট হয় না।

Generics ছাড়া সমস্যা

Generics ব্যবহার না করলে প্রতিটি আলাদা data type এর জন্য আলাদা আলাদা function লিখতে হয়। এতে code বারবার repeat হয় এবং বড় project এ এগুলো manage করা অনেক কঠিন হয়ে যায়।

নিচের উদাহরণটি দেখলে বিষয়টি আরও পরিষ্কার হবে:

function getString(value: string): string {
  return value;
}

function getNumber(value: number): number {
  return value;
}

এখানে দেখা যাচ্ছে একই কাজ শুধু type আলাদা হওয়ার কারণে আলাদা আলাদা function লিখতে হচ্ছে। এটা code duplication বাড়িয়ে দেয়।

Generics দিয়ে সমাধান

Generics ব্যবহার করলে একটাই function দিয়ে সব ধরনের data handle করা যায়।

নিচের উদাহরণটি দেখলে বিষয়টি আরও পরিষ্কার হবে:

function getValue<T>(value: T): T {
  return value;
}

এখানে T হলো একটি type placeholder। অর্থাৎ ভবিষ্যতে যেকোনো type এখানে আসতে পারে।

ব্যবহার:
const a = getValue<string>("Hello");
const b = getValue<number>(100);

TypeScript নিজেই বুঝে নেয় কোন জায়গায় কোন type ব্যবহার হচ্ছে, তাই extra code লিখতে হয় না এবং type safety বজায় থাকে।

বাস্তব উদাহরণ: API Response

Real-world application এ API থেকে বিভিন্ন ধরনের data আসে। Generics ব্যবহার করলে এই বিভিন্ন response সহজে handle করা যায়।

type ApiResponse<T> = {
  data: T;
  success: boolean;
};

type User = {
  id: number;
  name: string;
};

type UserResponse = ApiResponse<User>;

এখানে একই structure ব্যবহার করা হয়েছে, শুধু data এর type পরিবর্তন করা হয়েছে।

Array এর ক্ষেত্রে ব্যবহার
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

const x = getFirst([1, 2, 3]);
const y = getFirst(["a", "b", "c"]);

একই function দিয়ে number এবং string দুটো array-ই safely handle করা যাচ্ছে।

Generics এর উপকারিতা:
একই code বারবার লিখতে হয় না
Code reuse করা যায়
Type safety বজায় থাকে
বড় project সহজে manage করা যায়
Code আরও clean এবং scalable হয়


শেষ কথা

Generics হলো TypeScript-এর একটি core concept। এটা ভালোভাবে বুঝতে পারলে  এমন code লিখতে পারব যা একদিকে flexible, আবার অন্যদিকে পুরোপুরি type-safe। এর ফলে code হবে আরও professional, reusable এবং production-ready।