function hexToRGB (hex) {
  
  // remove whitespace from left and rihgt ends
  hex = hex.trim();
  if (hex.startsWith('#')) {
    hex = hex.replace('#', '');
  }
  
  // convert short hand notation (f0f) to the regular notation (ff00ff)
  if (hex.length == 3) {
    let temp = '';
    for (let i = 0; i < hex.length; i++) {
      temp += hex[i] + hex[i];
    }
    hex = temp;
  }

  // check for additional white space between characters (f    0    f)
  if (hex.length != 6 ) {
    throw new Error(`hexToRGB was called with incorrect hex code. 
      Valid hex code is either three to four characters long with following characters '0123456789ABCDEFabcdef' `);
  }

  // check for valid characters from 0-F
  let validHexChars = '0123456789ABCDEFabcdef';
  for (let i = 0; i < hex.length; i++) {
    if ( !validHexChars.includes(hex[i]) ) {
      throw new Error(`hexToRGB was called with incorrect hex code. 
        Valid hex code is either three to four characters long with following characters '0123456789ABCDEFabcdef' `);
    }
  }
  
  let RGB = [];
  let r = parseInt(hex.substring(0, 2), 16);
  RGB.push(r);
  let g = parseInt(hex.substring(2, 4), 16)
  RGB.push(g);
  let b = parseInt(hex.substring(4, 6), 16);
  RGB.push(b);

  return RGB;
}

//console.log( hexToRGB('ff00ff') ) // [255, 0, 255]
//console.log( hexToRGB('#ff00ff') ) // [255, 0, 255]
//console.log( hexToRGB('#f0f') ) // [255, 0, 255]
//console.log( hexToRGB('ff00fff') ) // hextToRGB was called with incorrect hex code. ...
//console.log( hexToRGB('ff00ffg') ) // hextToRGB was called with incorrect hex code. ...
