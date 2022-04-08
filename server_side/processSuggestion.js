function processSuggestion(daka1,daka2,daka3_1,daka3_2) {
	var pointA=0;
	var pointB=0;
	var pointC=0;
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

	if(pointC > pointB || pointC > pointA) {
		console.log("不值得购买");
	}
	if(pointA==0) {
		if((pointB - pointC)>=2) {
			console.log("可以考虑");
		}
		else {
			console.log("不建议购买");
		}
	}
	if(pointC==0) {
		if(pointA>=pointB) {
			console.log("可以买");
		}
		else {
			console.log("可以考虑");
		}
	}
}

module.exports = {
	processSuggestion
}