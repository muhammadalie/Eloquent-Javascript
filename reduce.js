function uni(array){
    return array.reduce(function(a,b){
	return a.concat(b)
    });
}
a=[ [ 1, 2 ], [ 2, 3 ] ];
console.log(uni(a));

a=[ [ 1, 2 ], [ 2, 3 ], [4, 5] ];
console.log(uni(a));

