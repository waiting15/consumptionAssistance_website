function processSuggestion(daka1,daka2,daka3_1,daka3_2) {
	var pointA=0;
	var pointB=0;
	var pointC=0;
	daka3_1 = Number(daka3_1);
	daka3_2 = Number(daka3_2);
	return new Promise(function(resolve,reject) {
		console.log("daka1 = "+daka1);
		console.log("daka2 = "+daka2);
		console.log("daka3_1 = "+daka3_1);
		console.log("daka3_2 = "+daka3_2);
		console.log("daka3_1 typeof = "+typeof daka3_1);
		switch(daka1) {
			case 1: pointC+=1;
			break;
			case 2: pointB+=1;
			break;
			case 3: pointA+=1;
			break;
			case 4: pointB+=1;
			break;
			case 5: pointC+=1;
			break;
			case 6: pointB+=1;
			break;
		}	
		switch(daka2) {
			case 'A1': pointB+=1;
			break;
			case 'A2': pointA+=1;
			break;
			case 'A3': pointB+=1;
			break;
			case 'B1': pointC+=1;
			break;
			case 'B2': pointB+=1;
			break;
			case 'B3': pointA+=1;
			break;
		}
		switch(daka3_1) {
			case 1: pointC+=1;
			break;
			case 2: pointB+=1;
			break;
			case 3: pointA+=1;
			break;
		}
		switch(daka3_2) {
			case 1: pointA+=2;
			break;
			case 2: pointB+=1;
			break;
			case 3: pointC+=2;
			break;
		}
		resolve(pointA);
	}).then(function(pointA) {
		console.log("pointA = "+pointA);
		var suggest = outputSuggestion(pointA,pointB,pointC);
		console.log("outputSuggestion-> suggest = "+suggest);
		return suggest;
	});



}

function outputSuggestion(pointA,pointB,pointC) {
	console.log("pointA= "+pointA +",pointB= "+pointB+",pointC= "+pointC);
	var suggest = "";
	if(pointC > pointB || pointC > pointA) {
		console.log("不值得购买");
		suggest= "不值得购买";
		return suggest;
	}
	if(pointA==0) {
		if((pointB - pointC)>=2) {
			console.log("可以考虑");
			suggest= "可以考虑";
			return suggest;
		}
		else {
			console.log("不建议购买");
			suggest="不建议购买";
			return suggest;
		}
	}
	if(pointC==0) {
		if(pointA>=pointB) {
			console.log("可以买");
			suggest="可以买";
			return suggest;
		}
		else {
			console.log("可以考虑");
			suggest="可以考虑";
			return suggest;
		}
	}
}

async function getSuggest(daka1,daka2,daka3_1,daka3_2) {
	return await processSuggestion(daka1,daka2,daka3_1,daka3_2);
}

module.exports = {
	getSuggest
}