function binarySearch(arr, val){
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        
        let middle = Math.ceil((left + right) / 2);

        if (val == arr[middle]) {
            return middle;
        }
        
        if (val > arr[middle]) {
            left = middle + 1;
        }
        
        if (val < arr[middle]) {
            right = middle - 1;
        }
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8));
console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5], 6));
