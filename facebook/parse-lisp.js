
function tokenize(s) {
	// Convert a string into list of tokens.
	return s.replace(/\(/g, " ( ").replace(/\)/g, " ) ").trim().split(/\s+/);
}

