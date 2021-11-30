let maxNumbers = [1,3,2,10,44,1,24,100,5,12,88,200,2,33];
function listNumbers(){
	document.getElementById("main").innerHTML=maxNumbers.toString();
}
function maxNum(){
	var largest = Math.max.apply(0, maxNumbers);
	document.getElementById("maxnum").innerHTML = "The max number of the array is: " +largest;
}
