//array and search ele as args. return the index at which its found. if not found, return that
let search = function(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == key) {
            return i + 1; 
        }
    }
    return 'not found'; 
}

let a = [1, 2, 3, 7, 9, 10];
let b = 0;
let result = search(a, b);
console.log(result);