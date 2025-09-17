function add() {
    let real1 = parseFloat(document.getElementById('real1').value);
    let imaginary1 = parseFloat(document.getElementById('imaginary1').value);
    let real2 = parseFloat(document.getElementById('real2').value);
    let imaginary2 = parseFloat(document.getElementById('imaginary2').value);
    let realResult = real1 + real2;
    let imaginaryResult = imaginary1 + imaginary2;
    document.getElementById('result').innerText = "Результат: (" + realResult + ") + (" + imaginaryResult + ")i";
  }

  function subtract() {
    let real1 = parseFloat(document.getElementById('real1').value);
    let imaginary1 = parseFloat(document.getElementById('imaginary1').value);
    let real2 = parseFloat(document.getElementById('real2').value);
    let imaginary2 = parseFloat(document.getElementById('imaginary2').value);
    let realResult = real1 - real2;
    let imaginaryResult = imaginary1 - imaginary2;
    document.getElementById('result').innerText = "Результат: (" + realResult + ") + (" + imaginaryResult + ")i";
  }

  function multiply() {
    let real1 = parseFloat(document.getElementById('real1').value);
    let imaginary1 = parseFloat(document.getElementById('imaginary1').value);
    let real2 = parseFloat(document.getElementById('real2').value);
    let imaginary2 = parseFloat(document.getElementById('imaginary2').value);
    let realResult = (real1 * real2) - (imaginary1 * imaginary2);
    let imaginaryResult = (real1 * imaginary2) + (imaginary1 * real2);
    document.getElementById('result').innerText = "Результат: (" + realResult + ") + (" + imaginaryResult + ")i";
  }

  function divide() {
    let real1 = parseFloat(document.getElementById('real1').value);
    let imaginary1 = parseFloat(document.getElementById('imaginary1').value);
    let real2 = parseFloat(document.getElementById('real2').value);
    let imaginary2 = parseFloat(document.getElementById('imaginary2').value);
    if (real2 === 0 && imaginary2 === 0) {
      document.getElementById('result').innerText = "Помилка: Ділення на нуль";
    } else {
      let denominator = (real2 * real2) + (imaginary2 * imaginary2);
      let realResult = ((real1 * real2) + (imaginary1 * imaginary2)) / denominator;
      let imaginaryResult = ((imaginary1 * real2) - (real1 * imaginary2)) / denominator;
      document.getElementById('result').innerText = "Результат: (" + realResult + ") + (" + imaginaryResult + ")i";
    }
  }

