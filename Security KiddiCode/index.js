// Modular exponentiation function
function modPow(base, exp, mod) {
  let result = 1;
  base = base % mod;
  while (exp > 0) {
      if (exp % 2 === 1) {
          result = (result * base) % mod;
      }
      exp = Math.floor(exp / 2);
      base = (base * base) % mod;
  }
  return result;
}

// Mod inverse function
function modInverse(a, m) {
  a = a % m;
  for (let x = 1; x < m; x++) {
      if ((a * x) % m === 1) {
          return x;
      }
  }
  return 1;
}

// Encryption function
function encryption() {
  var letters = /^[A-Za-z]+$/;
  var output1 = "";
  var p = 2;
  var q = 13;
  var e = 11;
  var n = p * q;

  if (document.getElementById('input').value.match(letters)) {
      var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
      var plaintext = Array.from(document.getElementById('input').value.replaceAll(' ', '').toLowerCase());

      for (var i = 0; i < plaintext.length; i++) {
          for (var k = 0; k < alphabet.length; k++) {
              if (alphabet[k] === plaintext[i]) {
                  var val = modPow(k, e, n);
                  output1 += alphabet[val];
              }
          }
      }
      document.getElementById("output").innerHTML = output1;
  } else {
      alert("Please enter English letters only.");
  }
}

// Decryption function
function decryption() {
  var letters = /^[A-Za-z]+$/;
  var output1 = "";
  var p = 2;
  var q = 13;
  var e = 11;
  var n = p * q;
  var euler = (p - 1) * (q - 1);
  var d = modInverse(e, euler);

  if (document.getElementById('input').value.match(letters)) {
      var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
      var ciphertext = Array.from(document.getElementById('input').value.replaceAll(' ', '').toLowerCase());

      for (var i = 0; i < ciphertext.length; i++) {
          for (var k = 0; k < alphabet.length; k++) {
              if (alphabet[k] === ciphertext[i]) {
                  var val = modPow(k, d, n);
                  output1 += alphabet[val];
              }
          }
      }
      document.getElementById("output").innerHTML = output1;
  } else {
      alert("Please enter English letters only.");
  }
}
