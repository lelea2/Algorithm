// https://hellosmallworld123.wordpress.com/2015/09/04/abnb-%E9%9D%A2%E7%BB%8F%E6%80%BB%E7%BB%93/

function parseCSVLine(text) {
	return text.match( /\s*(\".*?\"|'.*?'|[^,]+)\s*(,|$)/g ).map( function (text) {
	  let m;
	  if (m = text.match(/^\s*\"(.*?)\"\s*,?$/)) return m[1]; // Double Quoted Text
	  if (m = text.match(/^\s*'(.*?)'\s*,?$/)) return m[1]; // Single Quoted Text
	  if (m = text.match(/^\s*(true|false)\s*,?$/)) return m[1] === "true"; // Boolean
	  if (m = text.match(/^\s*((?:\+|\-)?\d+)\s*,?$/)) return parseInt(m[1]); // Integer Number
	  if (m = text.match(/^\s*((?:\+|\-)?\d*\.\d*)\s*,?$/)) return parseFloat(m[1]); // Floating Number
	  if (m = text.match(/^\s*(.*?)\s*,?$/)) return m[1]; // Unquoted Text
	  return text;
	});
}

console.log(parseCSVLine('Weronika,Zaborska,njkfdsv@dsgfk.sn,"running, sci-fi",new,Krakow,25'))