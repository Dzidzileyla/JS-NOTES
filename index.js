"use strict";

function foo(a) {
    b = a;
	console.log( a + b ); // 4
}

foo( 2 );
console.log(b); // zmienna b w global scope???????