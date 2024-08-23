function flatten(arr) {
    let result = [];

    function helper(helperInput) {
        if (helperInput.length == 0) return;
        if (!Array.isArray(helperInput[0])) {
            debugger
            result.push(helperInput[0]);
            helperInput = helperInput.slice(1);
            
            helper(helperInput);
            
        } else if (Array.isArray(helperInput[0]) ) {
            debugger; 
            helper(helperInput[0]);
        }
    }

    helper(arr)
    return result;
}

console.log(flatten([1, 2, 3, [4, 5] ]));
