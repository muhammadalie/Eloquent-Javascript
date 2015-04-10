function every(array,fun){
	var init="true";
	for(var i=0;i<array.length;i++){
		if(init != String(fun(array[i]))){
			return String(fun(array[i]));
		}
	}
	return init;
};
function some(array,fun){
        var init="false";
        for(var i=0;i<array.length;i++){
                if(init != String(fun(array[i]))){
                        return String(fun(array[i]));
                }
        }
        return init;
};
console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));

