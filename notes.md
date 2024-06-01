<!-- Everything in the Javascript happens inside an Execution Context.

Execution Context:
 It keeps track of variables, functions, and where they're called from.

Javascript is Synchronous And single-Thread Language.

Synchronous: 
This means that JavaScript code is executed line by line, one at a time, in the order it appears in your script. Each statement must finish executing before the next one begins. This straightforward flow makes it easy to reason about the code and understand its behavior.

Single-threaded:
 JavaScript has only one thread of execution, meaning it can only do one thing at a time. While this might sound limiting, it actually simplifies things a lot. With just one thread, you don't have to worry about complex issues like race conditions and deadlocks that can arise in multi-threaded environments. It also ensures that JavaScript code is predictable and doesn't run into concurrency issues.

 What happens When You Run Javascript code?.

 Call Stack maintains the order of execution of execution contexts.

 call stack is also knows as 
1) Execution Context Stack
2) Program Stack
3) Control Stack
4) Runtime Stack
5) Machine Stack -->

Javascript is a programming language.we use it to give instructions to the computer.
Javascript is a Dynamically Typed Programming.

input(code) -> computer -> Output.

Variables in js
Variables are containers for the data.
x = null;
null -  means absent means nothing and it is also a special CSSMathValue. 
undefined - the value is not defined.


Let,Const & Var

Var: Variable can be Re-decleared & updated. A global scope Variable

Let: Variable cannot be re-decleared but can be updated. A block scope variable.

Const: Variable cannot be re-declared or updated. A block scope variable.

Comments in js
Part of code which is not Executed.

// This is a single Line comment

/*
 This is a multi-line comment.
*/

 Alert is one time popup box

 loops are used to execute a piece of code again & again 

 for loop 