function MakeLevelList(){
	let levelList = [
		[
			{type: "blower", x: 0, y: 0},
			{type: "payload", x: 0, y: 200},
			{type: "destination", x: 0, y: 800},
			{type: "block", x: 200, y: 800},
		],
		[
			{type: "blower", x: 200, y: 200},
			{type: "payload", x: 0, y: 100},
			{type: "destination", x: 0, y: 300},
		],
	]
	return levelList;
}
