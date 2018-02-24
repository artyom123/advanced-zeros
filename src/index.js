module.exports = function getZerosCount(number, base) {
    if(number <= 1) return 0;

    let result = 0,
      numValue = [],
      numPow = [],
      arrFactor = [],
      arr = [],
      j = numValue.length;
  
    for(let i = 2; i <= Math.floor(Math.sqrt(base)); i++) {  
      let a = 0;
      while(base % i === 0) {
        a++;
        numPow[j] = a;
        base /= i;
        numValue[j] = i;
      }
    }
    
    if(base != 1) {
      numPow.push(1);
      numValue.push(base);
      base = 1;
    }
    
    for(let i = 0; i < numValue.length; i++) {
      arrFactor.push(0);
    }
  
    for(let i = 0; i < numValue.length; i++) {
      var pow = 1;
      while(number / Math.pow(numValue[i], pow) >= 1) {
          arrFactor[i] += Math.floor(number / Math.pow(numValue[i], pow++));
      }
      arr[i] = Math.floor(arrFactor[i] / numPow[i]);
    }
    
    result = arr[0];
    for(let x = 1; x < arr.length; x++) {
      if(arr[x] < result) result = arr[x];
    }
    
    return result;
}
