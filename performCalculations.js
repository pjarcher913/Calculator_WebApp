function performCalculations() {
  
  let finalResult;
  
  /*
  Get user-entered values to perform math operations on.
   */
  let tf_value1 = Number(document.getElementById('tf_value1').value);
  let tf_value2 = Number(document.getElementById('tf_value2').value);
  // console.log(`Value #1: ${tf_value1}`);
  // console.log(`Value #2: ${tf_value2}`);
  
  /*
  Get which operation the user would like to perform.
   */
  let radio_add = document.getElementById('radio_add');
  let radio_subtract = document.getElementById('radio_subtract');
  let radio_multiply = document.getElementById('radio_multiply');
  let radio_divide = document.getElementById('radio_divide');
  let operationSymbol;
  
  if (radio_add.checked) {
    operationSymbol = '+';
    finalResult = tf_value1 + tf_value2;
  } else if (radio_subtract.checked) {
    operationSymbol = '-';
    finalResult = tf_value1 - tf_value2;
  } else if (radio_multiply.checked) {
    operationSymbol = '*';
    finalResult = tf_value1 * tf_value2;
  } else if (radio_divide.checked) {
    operationSymbol = '/';
    finalResult = tf_value1 / tf_value2;
  } else { /* do nothing, this is to catch any unforeseen errors */ }
  
  /*
  Print out the result to the screen.
   */
  // console.log(finalResult);
  document.getElementById('b_result').innerHTML =
    `${tf_value1} ${operationSymbol} ${tf_value2} = ${finalResult}`;
  
}