function calculateTriangleArea (s1, s2, s3){
	var ss = (s1 + s2 + s3)/2;
	var area = Math.sqrt(ss*(ss-s1)*(ss-s2)*(ss-s3));
	return area;
}

document.getElementById("cn").innerHTML = calculateTriangleArea(5,6,7);
