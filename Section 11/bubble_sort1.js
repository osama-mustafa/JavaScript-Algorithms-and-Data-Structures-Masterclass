
function swap(arr, index1, index2) {
    let temp    = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp
}

function bubbleSort1(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

console.log(bubbleSort1([17, 5, 33, 6, 99, 4, -1]));
