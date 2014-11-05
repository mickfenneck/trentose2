function isTriangle(a,b,c) {
	return ((a+b)>c) && (a+c>b) && (b+c > a);
}

function getTriangleType (a,b,c) {
	if(a==b && a==c)
		return "equilater";
	else if((a!=b)&&(a!=c)&&(b!=c))
		return "scalene";
	else
		return "isosceles";
}

function sumAll(array) {
	sum = 0;
	array.forEach(function(value) {
    	sum+=value;
	});
	return sum;
}

function aggregateAll(array, aggrFunc) {
	return aggrFunc(array);
}