TypeScript: Pick & Omit (Utility Types Explained)

TypeScript এ Pick এবং Omit হলো দুইটি গুরুত্বপূর্ণ utility type, যেগুলো বড় interface থেকে প্রয়োজন অনুযায়ী নতুন type তৈরি করতে সাহায্য করে। এর মাধ্যমে একই interface বারবার লিখতে হয় না এবং কোড আরও clean থাকে।

এগুলো মূলত DRY (Don’t Repeat Yourself) principle follow করতে সাহায্য করে, যার মাধ্যমে code duplication কমে যায়।

1| Pick কী ?

Pick ব্যবহার করে একটি বড় interface থেকে নির্দিষ্ট কিছু property নির্বাচন করা হয়। অর্থাৎ আমরা শুধু প্রয়োজনীয় field গুলোই নেই।

type PublicUser = Pick<User, "id" | "name" | "email">;

এখানে User interface থেকে শুধু id, name এবং email নেওয়া হয়েছে। বাকি property গুলো বাদ দেওয়া হয়েছে।
সহজভাবে বললে, Pick মানে হলো প্রয়োজন অনুযায়ী নির্দিষ্ট অংশ বেছে নেওয়া।


2| Omit কী ?

Omit হলো Pick এর বিপরীত। এটি একটি interface থেকে নির্দিষ্ট কিছু property বাদ দিয়ে বাকি সব কিছু নিয়ে আসে।

type SafeUser = Omit<User, "password">;

এখানে password বাদ দেওয়া হয়েছে এবং বাকি সব property রাখা হয়েছে।
সহজভাবে বললে, Omit মানে হলো প্রয়োজন না থাকা অংশ বাদ দেওয়া।

কেন Pick এবং Omit ব্যবহার করা হয়
বড় application এ একই interface বিভিন্ন জায়গায় ভিন্নভাবে ব্যবহার করতে হয়। সবসময় নতুন করে interface লেখা ঠিক না। তাই Pick এবং Omit ব্যবহার করে প্রয়োজন অনুযায়ী ছোট type তৈরি করা হয়।


এর প্রধান সুবিধাগুলো হলো:

কোড বারবার লিখতে হয় না
একই interface থেকে বিভিন্ন version তৈরি করা যায়
কোড clean এবং readable থাকে
maintain করা সহজ হয়
DRY principle follow করা যায়



সহজভাবে মনে রাখার নিয়ম
Pick মানে প্রয়োজনীয় অংশ নেওয়া
Omit মানে অপ্রয়োজনীয় অংশ বাদ দেওয়া


শেষ কথা
Pick এবং Omit TypeScript-এর খুব গুরুত্বপূর্ণ utility type। এগুলো ব্যবহার করলে বড় project এ code reuse করা সহজ হয় এবং একই সাথে type safety বজায় থাকে। এর ফলে code আরও structured, clean এবং scalable হয়।