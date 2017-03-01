var isValid = function(s) {
  // var characters = s.split('');
  var openCase = ['(', '{', '[' ];
  // simple base case
  if(openCase.includes(s[0]) === false){
    return false
  }
  var checkTable = {
    ')' : '(',
    '}' : '{',
    ']' : '['
  }

  var stack = [];

  for(var i = 0; i < s.length; i++){
    // if it open case, we push it onto the stack
    if (openCase.includes(s[i])){
      stack.push(s[i])
      // otherwise we need to check if the closing case is valid
    } else{
      // console.log(checkTable[s[i]], 'kenzo')
      // console.log(stack[stack.length - 1], 'this is stack')
      if(checkTable[s[i]] !== stack[stack.length - 1]){
        return false
      } else{
        stack.pop()
      }
    }
  }
  return stack.length === 0;
};

// https://leetcode.com/problems/valid-parentheses/?tab=Description
