TypeScript এ any vs unknown: Type Safety এবং Type Narrowing


1| কেন any কে “Type Safety Hole” বলা হয়?

TypeScript-এর মূল উদ্দেশ্য হলো code-কে আরও নিরাপদ করা এবং development-এর সময় ভুল ধরতে সাহায্য করা। কিন্তু any type ব্যবহার করলে TypeScript তার এই নিরাপত্তা ব্যবস্থা হারিয়ে ফেলে। এজন্যই any কে “type safety hole” বলা হয়।

যখন কোনো variable-এর type any দেওয়া হয়, তখন TypeScript আর সেই variable-এর type check করে না। ফলে developer যেকোনো method বা operation ব্যবহার করতে পারে, যদিও সেটি ভুল হতে পারে। TypeScript compile time-এ কোনো error দেখায় না, কিন্তু runtime-এ application crash করতে পারে।

নিচের উদাহরণটি দেখলে বিষয়টি আরও পরিষ্কার হবে:

let data: any = "Hello World";
console.log(data.toUpperCase());
data = 100;
console.log(data.toUpperCase());

এখানে প্রথমে data এর মধ্যে string রাখা হয়েছে। তাই toUpperCase() method ঠিকভাবে কাজ করেছে। কিন্তু পরে data এর মধ্যে number রাখা হয়েছে:

data = 100;

তারপরও TypeScript কোনো error দেখায়নি, কারণ variable-এর type ছিল any। কিন্তু number-এর উপর toUpperCase() method ব্যবহার করা সম্ভব নয়। ফলে runtime-এ error হবে এবং application crash করতে পারে।
এই কারণেই any কে “type safety hole” বলা হয়। কারণ এটি TypeScript-এর type checking বন্ধ করে দেয় এবং ভুল code detect করতে ব্যর্থ হয়।


2| কেন unknown হলো Safer Choice?

unknown হলো TypeScript-এর একটি নিরাপদ type, যা unpredictable বা অজানা data handle করার জন্য ব্যবহার করা হয়। এটি any এর মতো যেকোনো ধরনের value গ্রহণ করতে পারে, কিন্তু বড় পার্থক্য হলো—unknown type-এর value সরাসরি ব্যবহার করা যায় না।
কোনো operation বা method ব্যবহার করার আগে TypeScript developer-কে বাধ্য করে type check করতে। এর ফলে ভুল method ব্যবহার করার সম্ভাবনা কমে যায় এবং runtime error এড়ানো সম্ভব হয়।


নিচের উদাহরণটি দেখলে বিষয়টি আরও পরিষ্কার হবে:

let value: unknown = "Hello TypeScript";
console.log(value.toUpperCase()); //Error

এখানে value এর মধ্যে string রাখা হলেও TypeScript সরাসরি toUpperCase() method ব্যবহার করতে দিচ্ছে না। কারণ unknown type-এর ক্ষেত্রে TypeScript নিশ্চিত নয় যে value আসলেই string কিনা।
সঠিকভাবে ব্যবহার করতে হলে আগে type check করতে হবে:

let value: unknown = "Hello TypeScript";
if (typeof value === "string") {  
    console.log(value.toUpperCase()); //  Safe
}

এখানে typeof value === "string" check করার মাধ্যমে TypeScript বুঝতে পারে যে value আসলে string। এরপর নিরাপদভাবে toUpperCase() method ব্যবহার করা যায়।
এই কারণে unknown কে any থেকে safer choice বলা হয়। কারণ এটি type checking বজায় রাখে এবং runtime bug হওয়ার ঝুঁকি কমিয়ে code-কে আরও নিরাপদ করে তোলে।


3| Type Narrowing কী?

TypeScript-এ “type narrowing” একটি গুরুত্বপূর্ণ concept। এটি এমন একটি process যেখানে TypeScript conditional check-এর মাধ্যমে একটি broad type থেকে নির্দিষ্ট type নির্ধারণ করে।

যদি কোনো variable-এর type unknown। এই অবস্থায় TypeScript জানে না variable-এর মধ্যে কী ধরনের data আছে। তাই সরাসরি কোনো method বা operation ব্যবহার করতে দেয় না। কিন্তু যখন আমরা condition ব্যবহার করে type check করি, তখন TypeScript সেই variable-এর নির্দিষ্ট type বুঝতে পারে। এই process-টিকেই বলা হয় “type narrowing”।

নিচের উদাহরণটি দেখলে বিষয়টি আরও পরিষ্কার হবে:

let value: unknown = "Hello TypeScript";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}

এখানে প্রথমে value এর type ছিল unknown। তাই TypeScript নিশ্চিত ছিল না এটি string, number নাকি অন্য কিছু।
কিন্তু নিচের condition-এর মাধ্যমে:

typeof value === "string"

TypeScript বুঝতে পারে যে value আসলে একটি string। এরপর এটি automatically type-কে narrow করে string হিসেবে ধরে নেয়। ফলে toUpperCase() method নিরাপদভাবে ব্যবহার করা সম্ভব হয়।

অর্থাৎ, type narrowing-এর মূল উদ্দেশ্য হলো type check-এর মাধ্যমে data-এর নির্দিষ্ট type নিশ্চিত করা, যাতে code আরও safe এবং error-free হয়।
