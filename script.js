function showSimpleCalculator() {
    document.getElementById('simple-calculator').style.display = 'block';
    document.getElementById('advanced-calculator').style.display = 'none';
  }
  
  function showAdvancedCalculator() {
    document.getElementById('simple-calculator').style.display = 'none';
    document.getElementById('advanced-calculator').style.display = 'block';
  }
  
  function performOperation(operator) {
    let num1 = parseFloat(document.getElementById('simple-input1').value);
    let num2 = parseFloat(document.getElementById('simple-input2').value);
    let result;
    switch(operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
    }
    document.getElementById('simple-result').textContent = result;
  }
  
  function performAdvancedOperation() {
    let numbers = document.getElementById('numbers-input').value.split(',').map(num => parseInt(num.trim()));
    let method = document.getElementById('method-selector').value;
    let result;
    switch(method) {
      case 'prime-factorization':
        result = primeFactorization(numbers);
        break;
      case 'division-method':
        result = divisionMethod(numbers);
        break;
    }
    document.getElementById('advanced-result').textContent = result;
  }
  
  function primeFactorization(numbers) {
    // Find LCM using prime factorization
    let lcm = 1;
    let primes = {};
    for (let i = 0; i < numbers.length; i++) {
      let num = numbers[i];
      let factors = getPrimeFactors(num);
      for (let factor in factors) {
        if (!primes[factor] || primes[factor] < factors[factor]) {
          primes[factor] = factors[factor];
        }
      }
    }
    for (let factor in primes) {
      lcm *= Math.pow(parseInt(factor), primes[factor]);
    }
    return lcm;
  }
  
  function getPrimeFactors(n) {
    let factors = {};
    let divisor = 2;
    while (n >= 2) {
      if (n % divisor === 0) {
        factors[divisor] = (factors[divisor] || 0) + 1;
        n = n / divisor;
      } else {
        divisor++;
      }
    }
    return factors;
  }
  
  function divisionMethod(numbers) {
    // Find HCF using the division method
    let hcf = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      hcf = findHCF(hcf, numbers[i]);
    }
    return hcf;
  }
  
  function findHCF(a, b) {
    if (b === 0)
      return a;
    return findHCF(b, a % b);
  }
  