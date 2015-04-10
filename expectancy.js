var ancestry=require('/home/ali/js/ancestry.js')

var byName = {};
var arr=JSON.parse(ancestry)
JSON.parse(ancestry).forEach(function(person) {
    byName[person.name] = person;
});

function average(array) {
   function plus(a, b) { return a + b; }
   return array.reduce(plus) / array.length;
};

function year(){
    var y={};
    for(var i=0;i<arr.length;i++){
	if(y[Math.ceil(arr[i].died/100)]){
            y[Math.ceil(arr[i].died/100)].push( (arr[i].died)-(arr[i].born) );
	}
	else{y[Math.ceil(arr[i].died/100)]=[(arr[i].died)-(arr[i].born)];}
        };
    return y;
};
var x={};
for(var i=0;i<arr.length;i++){
	x[Math.ceil(arr[i].died/100)]=average(year()[Math.ceil(arr[i].died/100)]);
};
console.log(x);

