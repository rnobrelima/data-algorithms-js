function sequencyFibonacci() {
    // TODO implements sequence fibonacci
}

function complexFunction(var1, var2, var3, var4, var5) {
   // TODO ways to simplify conditions 
   var value = '';
   value += buildFilter(var1, '+' );
   value += buildFilter(var2, '-' );
   value += buildFilter(var3, 'x' );
   value += buildFilter(var4, '/' );
   value += buildFilter(var5, '%' );
   console.log(value);
}

function buildFilter(value, operator) {
   var result = '';
   result = ` valor: ${value} operator: ${operator}`
   return result
}