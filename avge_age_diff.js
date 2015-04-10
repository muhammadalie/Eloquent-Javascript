var ancestry=require('/home/ali/js/ancestry.js')
                                   
var byName = {};
var arr=JSON.parse(ancestry)
JSON.parse(ancestry).forEach(function(person) {
    byName[person.name] = person;
});
function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}
function age(){
    a=[]
    for(var i=0;i<arr.length;i++){
	if(byName[(arr[i].mother)]){
    	    a.push( (arr[i].born)-(byName[(arr[i].mother)].born) );
	}
    };
    return a
}
console.log(average(age()));
