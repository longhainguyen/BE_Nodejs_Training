// phạm vi  giống let

// const không thể update hoặc khai báo lại
const greeting = 'say Hi';
greeting = 'say Hello instead'; // error: Assignment to constant variable.

// Hoisting của const
// Cũng giống như let, khi khai báo const chúng sẽ được đưa lên đầu nhưng không được khởi tạo.

/**
 * When to Use var, let, or const?
 *  1. Always declare variables
 *  2. Always use const if the value should not be changed
 *  3. Always use const if the type should not be changed (Arrays and Objects)
 *  4. Only use let if you can't use const
 *  5. Only use var if you MUST support old browsers.
 */
