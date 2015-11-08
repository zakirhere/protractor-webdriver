var x = 2;

var foo = {
	x : 3
}

var bar = function() {
	console.log(this.x);
}

bar();

bar.bind(foo2)();

