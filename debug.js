class Debug{
	constructor(isOn){
		this.isOn = isOn;
		this.simTick = this.log;
	}
	log(message){
		if(!this.isOn){return}
		console.log(message)
	}
	logError(message, data){
		let error = new Error();
		let errorMessage = "ERROR: "+message+(data ? " "+safeJSONStringify(data, 3) : "")+" "+error.stack;
		this.log(errorMessage)
		throw message;
	}
	logWarning(message, data){
		this.log("WARNING: "+message+(data ? " "+safeJSONStringify(data, 2) : ""));
	}
	assert(condition, message, data){
		if(condition){return}
		this.logError(message, data);
	}
	expect(variable, expectedType, message, data){
		this.assert(variable !== undefined && variable !== null, message, data)
		if(expectedType){
			this.assert(typeof variable === expectedType, message, data)
		}
	}
	expectNum(variable, message, data){
		this.assert(!isNaN(variable), message, data)
	}
}