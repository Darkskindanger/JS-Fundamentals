// Event loop:

// Javascript is a Single Threaded language (Meaning we cannot simultaneously perform operations. Operations are usually added to  callstack and done in sequence)

// Memory heap: Whenever we DECLARE variables or functions. They are stored in the heap

// Call stack: Whenever code is EXECUTED, It is added to the callstack and popped off once finished executing

// Libuv: Whenever EXECUTING an Async method, It is offloaded into libuv to be run simoulataneously with other operations in the main thread (Memory heap/call stack)

// IN SHORT:

// An event loop is like a while loop that checks for when there are tasks in the call stack/event queue and reminds the call stack of whats next and to execute it

// while isNotEmpty(eventQueue){Pull out first item from event queue and execute it}

//
//
//

// What is the event loop:
// A design pattern that orchestrates or co-ordinates the execution of synchronous and asynchronous code in Node.js

// Execution order:

// User written synchronous code takes priority over async code... This means the event loop ONLY comes into picture after the call stack is empty of sync code

// Q and A:
// Q1. Whenever an async task completes in libuv, at what point does Node decide to run the associated callback function on the call stack
// A1. Callback functions are executed only when the call stack is empty. The normal flow of execution will not be interrupted to run a callback function

// Q2. What about async methods like setTimeout and setInterval which also delay execution of a callback function?
// A2. setTimeout and setInterval callbacks are given first priority

//Q3. If two async tasks such as setTimeout and readFile complete at the same time, How does Node decide which callback function to run first on the call stack?
// A3. Timer callbacks are executed before I/O callbacks even if both are ready at the exact same time.

//
//
// 3 Real world strategies

// 1. setTimeout(function, time) - *Note, the time specified may take longer due to the fact that it specifies the time after which the function is added into the event queue, not necessarily how long it will delay till firing

// Example - We want to put the lessImportantFunction to the back of the queue and fire after the important functions finish. Because setTimeout() is asynchronous, it gets pushed to the back of the event queue after the synchronous code
// importantFunction();
// setTimeout(lessImportantFunction,0)
// moreImportantFunction

// 2. Breaking down large processor heavy tasks into chunks

// function processArray(bigArray,start){ *start indicates the increment at which the processing will start for a new batch of data (we are breaking this bigArray into batches of data to process)

// for(let i = start, i < BATCH_SIZE; i++){

// ProcessItem(bigArray[i]);
// }
//
//setTimeout(()=>{processArray(bigArray,start+BATCH_SIZE),0})
// }

// 3. Assign the large/complex task to a worker thread and skip the main thread

// const myWorker = new Worker("scriptFile.js");

// Caveats:
// 1. No access to DOM
// 2. Does not run in the window context
// Typically used for offloading processing

// How to communicate with worker threads and vise versa
// myWorker.postMessage("Hello from main thread");
