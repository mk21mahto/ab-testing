
const startABTest = (controlValue,testValue) => {
  // Store the test information in localStorage
  localStorage.setItem('currentABTest', JSON.stringify({ controlValue,testValue}));
};
  
const stopABTest = () => {
  // Remove the test information from localStorage
  localStorage.removeItem('currentABTest');
};
  
const isVariantAlreadyStored = (isControl) => {
  const currentABTest = localStorage.getItem('currentABTest');
    if(currentABTest){
      const  variants = JSON.parse(currentABTest);

      return isControl ? variants.controlValue : variants.testValue
    }
  return isControl ? 100 : 0
}

const getVariant =  () => {

 const currentABTest = localStorage.getItem('currentABTest');

 if (currentABTest) {
  const  variants = JSON.parse(currentABTest);

  if(variants.controlValue === 100) return false
  if(variants.testValue === 100) return true
    
  const randomPercentage = Math.floor(Math.random() * 100);

  return randomPercentage < variants.testValue;
 }

 return false;
}
  
const increaseVariantInteraction = (variant) => {
  // Retrieve the current interaction count for the variant from localStorage
  let interactionCount = localStorage.getItem(`interactionCount_${variant}`) || 0;

  // Increment the interaction count
  interactionCount++;

  // Update the interaction count in localStorage
  localStorage.setItem(`interactionCount_${variant}`, interactionCount);
}
  
  export { startABTest, stopABTest, getVariant, increaseVariantInteraction, isVariantAlreadyStored };
  