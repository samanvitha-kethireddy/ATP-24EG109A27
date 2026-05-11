//function to search for an element in an array 
//(returns the index at which its found)


let search = function(arr, key) {
    
    //traversing the array
    for (let i = 0; i < arr.length; i++) 
    {
        
        //if current element = searching element
        if (arr[i] == key) 
        {
            return i + 1; 
        }
    }

    //if searching element not found in array
    return 'not found'; 
}

//taking an array
let arr = [1, 2, 3, 7, 9, 10];

//taking an element to search
let b = 7;

//calling the function
let result = search(arr,b);

//printing the output
console.log(`element found at position:`, result);
