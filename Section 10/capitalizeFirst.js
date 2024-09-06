function capitalizeFirst (arr) {
    let result = [];

  function helper(helperInput)
  {
      // Base case
      if (helperInput.length === 0) return;

      // Recursive case
      let firstLetter = arr[0][0].toUpperCase();
      let remainingWord = arr[0].slice(1);
      
      result.push(firstLetter + remainingWord);
      arr = arr.slice(1);
      helper(arr);
      
  }

  helper(arr);
  return result

}
