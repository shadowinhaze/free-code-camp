function palindrome(str) {
  const cleanInput = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  const reversedWord = cleanInput.split('').reverse().join('');
  return cleanInput === reversedWord;
}