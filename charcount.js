function countChar(string,letter){
    var count=0
    for(l=0;l<string.length;l++){
	if(string.charAt(l)==letter)
	    count+=1;
    }
    return count;
}
console.log(countChar("muhammadali","a"));		
