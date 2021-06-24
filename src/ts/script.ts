function sequencyFibonacci() {
   //TODO try another way 
  const fb = new Array();
  fb[1] = 1;
  fb[2] = 1;
  for (let index = 3; index < 20; index++) {
    fb[index] = fb[index - 1] + fb[index - 2];
  }
  console.log(fb);
}

function complexFunction(var1, var2, var3, var4, var5) {
  // TODO ways to simplify conditions
  var value = "";
  value += buildFilter(var1, "+");
  value += buildFilter(var2, "-");
  value += buildFilter(var3, "x");
  value += buildFilter(var4, "/");
  value += buildFilter(var5, "%");
  console.log(value);
}

function buildFilter(value, operator) {
  var result = "";
  result = ` valor: ${value} operator: ${operator}`;
  return result;
}
