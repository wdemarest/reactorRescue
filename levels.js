function EditLevel(sim, levelPlan, type, x, y){
	if(type == "deletePiece"){
		levelPlan.pop()
	}else{
		levelPlan.push({type: type, x: x, y: y})
		sim.addPiece(x, y, type)
	}
}
function MakeLevelList(){
	let LevelList = [
		[//Level Builder
			{type: "blower", x: 0, y: 0},
			{type: "destination", x: -200, y: 0},
			{type: "payload", x: 200, y: 0},

			{type: "bomb", x: 0, y: 200},

			{type: "block", x: 50, y: -150},
			{type: "block", x: 50, y: -250},
			{type: "block", x: -50, y: -150},
			{type: "block", x: -50, y: -250},
		],
		[//Minefield
			{type: "blower", x: 0, y: -100},
			{type: "destination", x: 0, y: 300},
			{type: "payload", x: 0, y: -50},

			{type: "bomb", x: 0, y: 0},
			{type: "bomb", x: 0, y: 50},
			{type: "bomb", x: 0, y: 100},
			{type: "bomb", x: 0, y: 150},
			{type: "bomb", x: 0, y: 200},

			{type: "bomb", x: 50, y: 0},
			{type: "bomb", x: 50, y: 50},
			{type: "bomb", x: 50, y: 100},
			{type: "bomb", x: 50, y: 150},
			{type: "bomb", x: 50, y: 200},

			{type: "bomb", x: 100, y: 0},
			{type: "bomb", x: 100, y: 50},
			{type: "bomb", x: 100, y: 100},
			{type: "bomb", x: 100, y: 150},
			{type: "bomb", x: 100, y: 200},

			{type: "bomb", x: -50, y: 0},
			{type: "bomb", x: -50, y: 50},
			{type: "bomb", x: -50, y: 100},
			{type: "bomb", x: -50, y: 150},
			{type: "bomb", x: -50, y: 200},

			{type: "bomb", x: -100, y: 0},
			{type: "bomb", x: -100, y: 50},
			{type: "bomb", x: -100, y: 100},
			{type: "bomb", x: -100, y: 150},
			{type: "bomb", x: -100, y: 200},

			{type: "block", x: -100, y: -200},
			{type: "block", x: 0, y: -200},
			{type: "block", x: 100, y: -200},

			{type: "block", x: -100, y: 400},
			{type: "block", x: 0, y: 400},
			{type: "block", x: 100, y: 400},

			{type: "block", x: -200, y: -200},
			{type: "block", x: -200, y: -100},
			{type: "block", x: -200, y: 0},
			{type: "block", x: -200, y: 100},
			{type: "block", x: -200, y: 200},
			{type: "block", x: -200, y: 300},
			{type: "block", x: -200, y: 400},

			{type: "block", x: 200, y: -200},
			{type: "block", x: 200, y: -100},
			{type: "block", x: 200, y: 0},
			{type: "block", x: 200, y: 100},
			{type: "block", x: 200, y: 200},
			{type: "block", x: 200, y: 300},
			{type: "block", x: 200, y: 400},
		],
		[//Trap
			{type: "blower", x: 0, y: -100},
			{type: "destination", x: 0, y: 200},
			{type: "payload", x: 0, y: 0},

			{type: "bomb", x: 40, y: 0},
			{type: "bomb", x: 0, y: 40},
			{type: "bomb", x: -40, y: 0},
			{type: "bomb", x: 0, y: -40},

			{type: "bomb", x: 35, y: 35},
			{type: "bomb", x: -35, y: -35},
			{type: "bomb", x: -35, y: 35},
			{type: "bomb", x: 35, y: -35},
		],
		[//Tunnel
			{type: "blower", x: 0, y: 0},
			{type: "destination", x: 200, y: 100},
			{type: "payload", x: 0, y: 50},
			{type: "block", x: -50, y: -75},
			{type: "block", x: 50, y: -75},

			{type: "block", x: -100, y: 0},
			{type: "block", x: -100, y: 100},
			{type: "block", x: -100, y: 200},
			{type: "block", x: -100, y: 300},
			{type: "block", x: -100, y: 400},
			{type: "block", x: 0, y: 400},
			{type: "block", x: 100, y: 400},
			{type: "block", x: 200, y: 400},

			{type: "block", x: 100, y: 0},
			{type: "block", x: 100, y: 100},
			{type: "block", x: 100, y: 200},
			{type: "block", x: 200, y: 200},

			{type: "block", x: 200, y: 0},
			{type: "block", x: 300, y: 25},
			{type: "block", x: 300, y: 175},
		],
		[//Fun
			{type: "blower", x: 0, y: 0},
			{type: "destination", x: 0, y: 200},

			{type: "bomb", x: 100, y: 0},
			{type: "bomb", x: 0, y: 100},
			{type: "bomb", x: -100, y: 0},
			{type: "bomb", x: 0, y: -100},

			{type: "bomb", x: 75, y: 75},
			{type: "bomb", x: -75, y: -75},
			{type: "bomb", x: -75, y: 75},
			{type: "bomb", x: 75, y: -75},

			{type: "block", x: 75, y: 0},
			{type: "block", x: -75, y: 0},
			{type: "block", x: 0, y: 75},
			{type: "block", x: 0, y: -75},
		],
	]
	return LevelList;
}

//Blower 50, Payload 40, Destination 75, Bomb 30, Block 100
