function capitalizeWords (arr) {
    // add whatever parameters you deem necessary - good luck!
        let result = [];
  
      function helper(helperInput) {
  
          // Base case
          if (helperInput.length === 0) return;
  
          // Recursive case
          let word = helperInput[0].toUpperCase();
          result.push(word);
          helperInput = helperInput.slice(1)
          helper(helperInput);
      }
  
      helper(arr)
      return result;
  
  }
  
  // let words = ['i', 'am', 'learning', 'recursion'];
  // capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']