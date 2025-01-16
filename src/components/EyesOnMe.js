import React, { useState } from 'react';

function EyesOnMe() {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus() {
    setIsFocused(true);  
    console.log('Good!');
  }


  function handleBlur() {
    setIsFocused(false);  
    console.log('Hey! Eyes on me!');
  }

  return (
    <button onFocus={handleFocus}  onBlur={handleBlur}  >  {isFocused ? 'Good!' : 'Eyes on me'}  </button>
  );
}

export default EyesOnMe;
