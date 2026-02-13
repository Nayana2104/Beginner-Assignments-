// assignment 2 12/12/2026

// implement array utility functions

function chunk(array, size) {
    if (size <= 0) throw new Error("Size must be positive");
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;

}
console.log(chunk([1, 2, 3, 4, 5], 2)); 
console.log(chunk([1, 2, 3, 4, 5], 3)); 

// flatten nested arrays
function flatten(array, depth = Infinity) {
    const result = [];
    function flattenHelper(arr, currentDepth) {
        for (const item of arr) {
            if (Array.isArray(item) && currentDepth < depth) {
                flattenHelper(item, currentDepth + 1);
            } else {
                result.push(item);
            }
        }    }
    flattenHelper(array, 0);
    return result;
} 
console.log(flatten([1, [2, [3, 4], 5]], 1));
console.log(flatten([1, [2, [3, 4], 5]], 2));

// GroupBy key
function groupBy(array, key) {
    return array.reduce((result, item) => {
        const groupKey = item[key];
        if (!result[groupKey]) {
            result[groupKey] = [];
        }
        result[groupKey].push(item);
        return result;
    }, {});
}
const data = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
];
console.log(groupBy(data, "age"));

// remove duplicates
function uniq(array) {
    const seen = new Set();
    return array.filter(item => {
        if (seen.has(item)) {
            return false;
        } else {
            seen.add(item);
            return true;
        }
    });
}
console.log(uniq([1, 2, 3, 2, 4, 1]));
console.log(uniq(["apple", "banana", "apple", "orange"]));

// unique with custom key
function uniqBy(array, key) {
    const seen = new Set(); 
    return array.filter(item => {
        const keyValue = item[key];
        if (seen.has(keyValue)) {
            return false;
        } else {
            seen.add(keyValue);
            return true;
        }   }); 
}
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }, 
    { id: 1, name: "Alice" },
    { id: 3, name: "Charlie" },
];
console.log(uniqBy(users, "id"));
console.log(uniqBy(users, "name"));     

