//Function handle click element
//Function created is closure, with i being passed
var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener('click', (function(i) {
        return function() {
            console.log('You clicked element #' + i);
        }
    })(i));
}

//Even with create button and bind to element, you will need to invoke anonymous function
for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', (function(i) { //invoke anonymous function call here
        return function() {
            console.log(i);
        };
    })(i));
    document.body.appendChild(btn);
}
