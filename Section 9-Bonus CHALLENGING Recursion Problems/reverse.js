function reverse(str){
    
    let result = '';

    function helper(helperInput) {

        if (helperInput.length === 0) return;
        result += helperInput[helperInput.length - 1];
        helperInput = helperInput.slice(0, -1);
        helper(helperInput);
    }

    helper(str);
    return result 
}
  
//  console.log(reverse('awesome')); // 'emosewa'
//  console.log(reverse('rithmschool')); // 'loohcsmhtir'