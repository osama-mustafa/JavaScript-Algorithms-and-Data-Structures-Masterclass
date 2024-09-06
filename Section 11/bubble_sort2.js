// Function to swap two elements in the array
function swap(arr, index1, index2) {
    let temp    = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp
}

// Optimized Bubble Sort function
function bubbleSort2(arr) {

    // Flag to track if any swaps were made
    let noSwaps;

    // Outer loop goes from end of array towards the beginning
    for (let i = arr.length; i > 0; i--) {

        // Assume no swaps will be needed in this pass
        noSwaps = true;

        // Inner loop checks each adjacent pair up to i-1
        for (let j = 0; j < i - 1; j++) {

            // If elements are in wrong order
            if (arr[j] > arr[j + 1]) {

                // Swap them
                swap(arr, j, j + 1);

                // Set flag to false if a swap happens
                noSwaps = false;
            }
        }

        // If no swaps were made, the array is sorted; break out of the loop
        if (noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort2([17, 5, 33, 6, 99, 4, -1]));

/*
The second loop in the bubble sort algorithm loops until i - 1 for the following reason:

(1) After each full pass of the outer loop (for (let i = arr.length; i > 0; i--)),
    the largest element is "bubbled up" to its correct position at the end of the array.
(2) Once the largest element is in place, you no longer need to check it in the next iteration.
(3) Therefore, the inner loop (for (let j = 0; j < i - 1; j++)) only needs to go up to i - 1, 
    because the elements beyond that are already sorted after each pass.
(4) In other words, as i decreases with each iteration of the outer loop,
    fewer elements need to be compared, optimizing the sorting process.
*/
