const extendHex = (shortHex) => {
  // write your code here
	// Remove # if present and convert to lowercase
  shortHex = shortHex.replace(/^#/, '').toLowerCase();

  // If the shortHex has only one character per color, duplicate each character
  if (shortHex.length === 3) {
    shortHex = shortHex.replace(/./g, '$&$&');
  }

  // Add # prefix and return the extended hex code
  return '#' + shortHex;
};

// Do not change the code below.

const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
