function generateTagCloudStart(){
	var tagsString = document.getElementById("tags").value;        
	var minFontSize = parseInt(document.getElementById("fontSizeMin").value);
	var maxFontSize = parseInt(document.getElementById("fontSizeMax").value);
	var tagCloudContainter = document.getElementById("tagCloudContainer");
	tagCloudContainer.innerHTML = "";
//extract words using regex
	var tagsArray = tagsString.match(/"[\w\s\.-]+"|\b[\w\.-]+\b/g);
	tagsArray = trimUnnecessary(tagsArray);
	var tagsCountObject = genTagsCountObject(tagsArray);
	var buffer = generateTagCloud(tagsCountObject,minFontSize,maxFontSize);                                                                
	tagCloudContainter.appendChild(buffer);
}
function genTagsCountObject(tagsArray){
	var i,len = tagsArray.length,result = new Object();
	for(i = 0; i < len; i++){
		if(result[tagsArray[i]]){
			result[tagsArray[i]]++;
		}
		else{
			result[tagsArray[i]] = 1;
		}
	}
	return result;
}
function generateTagCloud(tagsCountObj,minSize,maxSize){
	var i,currTagCount = 0,newSpan,maxTagCount = getTagMaxCount(tagsCountObj),
		fontSizeDifference = maxSize - minSize,
		buffer = document.createDocumentFragment(),
		size,
		verticalAlign;            
	for(i in tagsCountObj){
		newSpan = document.createElement("span");
		newSpan.innerHTML =" " + i + " ";
		currTagCount = tagsCountObj[i];
		size = minSize + parseInt(currTagCount / maxTagCount * fontSizeDifference);
		verticalAlign = minSize + (Math.random() * fontSizeDifference);
		newSpan.style.fontSize = size + "px";
		newSpan.style.verticalAlign = verticalAlign + "px";
		buffer.appendChild(newSpan);
	}
	return buffer;
}
function getTagMaxCount(tagsCountObj){
	var max = 0;
	var i,nextCount;
	for(i in tagsCountObj){
		nextCount = parseInt(tagsCountObj[i]);
		if(nextCount > max){
			max = nextCount;
		}
	}
	return max;
}        
function trimUnnecessary(arr){
	var i,
		len = arr.length,
		trimmed,
		trimmedArr = new Array();
	for(i = 0; i < len; i++){
		trimmed = arr[i].replace(/"/g,"")
		trimmedArr.push(trimmed);
	}        
	return trimmedArr;
}