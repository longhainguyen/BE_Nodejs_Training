// Set is a collection of unique values.

// Each value can only occur once in a Set.

// The values can be of any type,
// Create a Set
const letters1 = new Set(['a', 'b', 'c']);

// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add('a');
letters.add('b');
letters.add('c');
letters.add('c');
letters.add('c');
letters.add('c');
letters.add('c');
letters.add('c');

for (x of letters) {
    console.log(x);
}
