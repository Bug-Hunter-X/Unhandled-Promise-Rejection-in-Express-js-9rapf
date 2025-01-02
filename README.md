# Unhandled Promise Rejection in Express.js

This repository demonstrates a common error in Node.js Express applications: unhandled promise rejections.  The `bug.js` file contains code that simulates an asynchronous operation that might fail. If the operation fails, an error is thrown, resulting in an unhandled promise rejection. The `bugSolution.js` shows how to properly handle this error using `try...catch` and `process.on('unhandledRejection')`.

## Setup

1. Clone the repository.
2. Navigate to the repository directory.
3. Run `npm install express` to install the necessary dependencies.
4. Run `node bug.js` (observe the error)
5. Run `node bugSolution.js` (observe the improved error handling)