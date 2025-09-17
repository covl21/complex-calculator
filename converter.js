  function convertToTrigonometric() {
    let algebraicInput = document.getElementById('algebraicInput').value;
    let parts = algebraicInput.split('+');
    let x = parseFloat(parts[0]);
    let y = parseFloat(parts[1].replace('i', ''));
    let r = Math.sqrt(x * x + y * y);
    let phi = Math.atan2(y, x);
    let arctg = y / x;
    document.getElementById('convertedResult').innerHTML = "<strong>Тригонометрична форма комплексного числа:</strong><br>z = " + r.toFixed(2) + " (cos(arctg(" + arctg.toFixed(2) + ")) + i sin(arctg(" + arctg.toFixed(2) + ")))";
  }

  function convertToExponential() {
    let algebraicInput = document.getElementById('algebraicInput').value;
    let parts = algebraicInput.split('+');
    let x = parseFloat(parts[0]);
    let y = parseFloat(parts[1].replace('i', ''));
    let r = Math.sqrt(x * x + y * y);
    let phi = Math.atan2(y, x);
    let arctg = y / x;
    document.getElementById('convertedResult').innerHTML = "<strong>Показникова форма комплексного числа:</strong><br>z = " + r.toFixed(2) + "e<sup>iarctg(" + arctg.toFixed(2) + ")</sup>";
  }