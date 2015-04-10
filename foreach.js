function forEach(array,act){
    for(var i=0;i<array.length;i++)
	act(array[i]);
}

forEach([2,4,6,7,8],console.log)
var numbers = [1, 2, 3, 4, 5], sum = 0;
forEach(numbers, function(number) {
sum += number;
});
console.log(sum);

