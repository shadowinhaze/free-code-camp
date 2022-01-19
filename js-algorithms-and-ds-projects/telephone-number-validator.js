function telephoneCheck(str) {
  if (str.includes('(') && str.includes(')')) {
    return /^(1\s?)?\(\d{3}\)[- ]?\d{3}[- ]?\d{4}$/.test(str);
  } else {
    return /^(1\s?)?\d{3}[- ]?\d{3}[- ]?\d{4}$/.test(str);
  }
}