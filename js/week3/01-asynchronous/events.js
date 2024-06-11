function step1(init){
  return init + 1;

}

function step2(init){
  return init + 2;

}

function step3(init){
 return init + 3;

}

function doOperation(){
  let result = 0;
  result = step1(result);
  result = step2(result);
  result = step3(result);

console.log(`result: ${result}`)

}

doOperation();