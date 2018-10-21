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
		[//Tutorial 1
			{type: "blower", x: 0, y: -50},
			{type: "destination", x: 0, y: 100},
			{type: "payload", x: 0, y: 0},

			{type: "text", x: -300, y: -150, var1: "Welcome! Move the mouse to turn your ship."},
			{type: "text", x: -300, y: -100, var1: "Put your cursor below your ship and click."},
		],
		[//Tutorial 2
			{type: "blower", x: 0, y: -760},
			{type: "destination", x: 0, y: 100},
			{type: "payload", x: 0, y: 0},

			{type: "text", x: -300, y: -850, var1: "Press w, a, s, and d to move your ship."},
			{type: "text", x: -300, y: -800, var1: "Hold down the mouse to activate your repulser field."},
			{type: "text", x: -300, y: -700, var1: "Go down until you see more instructions."},
			{type: "text", x: -450, y: -100, var1: "Great! Now use your repulser field to push the payload into the Gate."},
			{type: "text", x: -300, y: 10, var1: "This is the payload."},
			{type: "text", x: -300, y: 110, var1: "This is the gate."},
		],
		[//Tutorial 3
			{type: "blower", x: -100, y: 0},
			{type: "destination", x: 0, y: 150},
			{type: "payload", x: 0, y: -100},

			{type: "block", x: 0, y: 0},

			{type: "text", x: -500, y: -150, var1: "Don't let the payload touch the barricade. (The red hexagon thingy)"},
		],
		[//Tutorial 4
			{type: "blower", x: -0, y: -150},
			{type: "destination", x: 0, y: 300},
			{type: "payload", x: 0, y: 0},

			{type: "block", x: -50, y: -75},
			{type: "block", x: 50, y: -75},

			{type: "block", x: -100, y: 0},
			{type: "block", x: -100, y: 100},
			{type: "block", x: -100, y: 200},
			{type: "block", x: -100, y: 300},

			{type: "block", x: 100, y: 0},
			{type: "block", x: 100, y: 100},
			{type: "block", x: 100, y: 200},
			{type: "block", x: 100, y: 300},

			{type: "text", x: -400, y: -200, var1: "Your ship can pass safely through anything."},
		],
		[//Tutorial 5
			{type: "blower", x: -0, y: 0},
			{type: "destination", x: 0, y: 500},
			{type: "payload", x: 0, y: 100},

			{type: "block", x: -50, y: -75},
			{type: "block", x: 50, y: -75},

			{type: "block", x: -100, y: 0},
			{type: "block", x: -100, y: 100},
			{type: "block", x: -100, y: 200},
			{type: "block", x: -100, y: 300},
			{type: "block", x: -100, y: 400},
			{type: "block", x: -100, y: 500},

			{type: "block", x: 100, y: 0},
			{type: "block", x: 100, y: 100},
			{type: "block", x: 100, y: 200},
			{type: "block", x: 100, y: 300},
			{type: "block", x: 100, y: 400},
			{type: "block", x: 100, y: 500},

			{type: "bomb", x: 0, y: 150},
			{type: "bomb", x: 0, y: 200},
			{type: "bomb", x: 0, y: 250},
			{type: "bomb", x: 0, y: 300},

			{type: "text", x: -400, y: -200, var1: "You can't let the payload touch the mines either. (The little orange circles)"},
			{type: "text", x: -400, y: -150, var1: "You'll have to push them out of the way with your repulser field."},
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

			{type: "text", x: -300, y: -300, var1: "Alright, you're on your own for now. Good luck!"},
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
			{type: "block", x: 300, y: 20},
			{type: "block", x: 300, y: 180},
		],
		[//Out of the Box
			{type: "blower", x: 0, y: 0},
			{type: "destination", x: 0, y: 200},
			{type: "payload", x: 0, y: 0},

			{type: "bomb", x: 0, y: 100},

			{type: "destructible", x: 0, y: 50},
			{type: "destructible", x: 50, y: 50},
			{type: "destructible", x: 50, y: 0},
			{type: "destructible", x: 50, y: -50},
			{type: "destructible", x: 0, y: -50},
			{type: "destructible", x: -50, y: -50},
			{type: "destructible", x: -50, y: 0},
			{type: "destructible", x: -50, y: 50},

			{type: "text", x: -300, y: -100, var1: "If a mine touches a box, the box is destroyed."},
		],
		[//Turret
			{type: "blower", x: 0, y: -125},
			{type: "destination", x: 0, y: 200},
			{type: "payload", x: 0, y: -200},

			{type: "turret", x: 0, y: 0, var1: 2, var2: 50},

			{type: "text", x: -100, y: -150, var1: "This is a turret."},
			{type: "text", x: -200, y: -75, var1: "They fire bullets at the payload."},
			{type: "text", x: -250, y: 0, var1: "Gate is below."},
		],
		[//Fast Turret
			{type: "blower", x: 0, y: -100},
			{type: "destination", x: 0, y: 200},
			{type: "payload", x: 0, y: -200},

			{type: "turret", x: 0, y: 0, var1: 0.5, var2: 300},

			{type: "text", x: -400, y: -150, var1: "Some turrets fire faster bullets or more frequently than others"},
		],
		[//Into the Box
			{type: "blower", x: 0, y: 100},
			{type: "destination", x: 0, y: 0},
			{type: "payload", x: 0, y: -100},

			{type: "turret", x: 200, y: 0, var1: 1, var2: 50},

			{type: "destructible", x: 0, y: 50},
			{type: "destructible", x: 50, y: 50},
			{type: "destructible", x: 50, y: 0},
			{type: "destructible", x: 50, y: -50},
			{type: "destructible", x: 0, y: -50},
			{type: "destructible", x: -50, y: -50},
			{type: "destructible", x: -50, y: 0},
			{type: "destructible", x: -50, y: 50},

			{type: "text", x: -200, y: -150, var1: "Bullets can also destroy boxes."},
		],
		[//Blocked Tunnel
			{type: "blower", x: 0, y: 50},
			{type: "destination", x: 200, y: 0},
			{type: "payload", x: 0, y: 0},

			{type: "block", x: -50, y: -75},
			{type: "block", x: 50, y: -75},

			{type: "block", x: -100, y: 0},
			{type: "block", x: -100, y: 100},
			{type: "block", x: -100, y: 200},
			{type: "block", x: -100, y: 300},
			{type: "block", x: -100, y: 400},
			{type: "block", x: -100, y: 500},
			{type: "block", x: 0, y: 500},

			{type: "block", x: 100, y: 0},
			{type: "block", x: 100, y: 100},
			{type: "block", x: 100, y: 200},
			{type: "block", x: 100, y: 300},
			{type: "block", x: 100, y: 500},

			{type: "destructible", x: 0, y: 100},
			{type: "destructible", x: 0, y: 200},
			{type: "destructible", x: 0, y: 300},
			{type: "destructible", x: 0, y: 400},
			{type: "destructible", x: 100, y: 400},

			{type: "bomb", x: 200, y: 0},
		],
		[//Deflections
			{type: "blower", x: 0, y: 50},
			{type: "destination", x: 0, y: 500},
			{type: "payload", x: 0, y: 0},

			{type: "block", x: -50, y: -75},
			{type: "block", x: 50, y: -75},

			{type: "block", x: -100, y: 0},
			{type: "block", x: -100, y: 100},
			{type: "block", x: -100, y: 200},
			{type: "block", x: -100, y: 300},
			{type: "block", x: -100, y: 400},
			{type: "block", x: -100, y: 500},

			{type: "block", x: 100, y: 0},
			{type: "block", x: 100, y: 100},
			{type: "block", x: 100, y: 200},
			{type: "block", x: 100, y: 300},
			{type: "block", x: 100, y: 400},
			{type: "block", x: 100, y: 500},

			{type: "destructible", x: 0, y: 100},
			{type: "destructible", x: 0, y: 200},
			{type: "destructible", x: 0, y: 300},
			{type: "destructible", x: 0, y: 400},
			{type: "destructible", x: 0, y: 500},

			{type: "turret", x: 0, y: 600, var1: 1, var2: 50},

			{type: "text", x: -250, y: -150, var1: "You can blow bullets out of the way."},
		],		
		[//Blocked Tunnel 2
			{type: "blower", x: 0, y: 50},
			{type: "destination", x: 200, y: 0},
			{type: "payload", x: 0, y: 0},

			{type: "block", x: -50, y: -75},
			{type: "block", x: 50, y: -75},

			{type: "block", x: -100, y: 0},
			{type: "block", x: -100, y: 100},
			{type: "block", x: -100, y: 200},
			{type: "block", x: -100, y: 300},
			{type: "block", x: -100, y: 400},
			{type: "block", x: -100, y: 500},
			{type: "block", x: 0, y: 500},
			{type: "block", x: 100, y: 500},
			{type: "block", x: 200, y: 500},

			{type: "block", x: 100, y: 0},
			{type: "block", x: 100, y: 100},
			{type: "block", x: 100, y: 200},
			{type: "block", x: 100, y: 300},
			{type: "block", x: 100, y: 500},

			{type: "block", x: 300, y: 0},
			{type: "block", x: 300, y: 100},
			{type: "block", x: 300, y: 200},
			{type: "block", x: 300, y: 300},
			{type: "block", x: 300, y: 400},
			{type: "block", x: 300, y: 500},

			{type: "destructible", x: 200, y: 100},
			{type: "destructible", x: 200, y: 200},
			{type: "destructible", x: 200, y: 300},

			{type: "turret", x: 300, y: 200, var1: 1, var2: 50},
		],
		[//Defended Spiral
			{type: "blower", x: 0, y: 100},
			{type: "destination", x: -100, y: 0},
			{type: "payload", x: 300, y: 0},


			{type: "block", x: 0, y: 0},
			{type: "block", x: 0, y: -100},
			{type: "block", x: -100, y: -100},
			{type: "block", x: -200, y: -100},
			{type: "block", x: -200, y: 0},
			{type: "block", x: -200, y: 100},
			{type: "block", x: -200, y: 200},
			{type: "block", x: -100, y: 200},
			{type: "block", x: 0, y: 200},
			{type: "block", x: 100, y: 200},
			{type: "block", x: 200, y: 200},
			{type: "block", x: 200, y: 100},
			{type: "block", x: 200, y: 0},
			{type: "block", x: 200, y: -100},
			{type: "block", x: 200, y: -200},
			{type: "block", x: 200, y: -300},
			{type: "block", x: 100, y: -300},
			{type: "block", x: 0, y: -300},
			{type: "block", x: -100, y: -300},
			{type: "block", x: -200, y: -300},
			{type: "block", x: -300, y: -300},
			{type: "block", x: -400, y: -300},
			{type: "block", x: -400, y: -200},
			{type: "block", x: -400, y: -100},
			{type: "block", x: -400, y: 0},
			{type: "block", x: -400, y: 100},
			{type: "block", x: -400, y: 200},
			{type: "block", x: -400, y: 300},
			{type: "block", x: -400, y: 400},
			{type: "block", x: -300, y: 400},
			{type: "block", x: -200, y: 400},
			{type: "block", x: -100, y: 400},
			{type: "block", x: 0, y: 400},
			{type: "block", x: 100, y: 400},
			{type: "block", x: 200, y: 400},
			{type: "block", x: 300, y: 400},
			{type: "block", x: 400, y: 400},
			{type: "block", x: 400, y: 300},
			{type: "block", x: 400, y: 200},
			{type: "block", x: 400, y: 100},
			{type: "block", x: 400, y: 0},
		],
		[//Narrow Tunnel
			{type: "blower", x: 0, y: 0},
			{type: "destination", x: 200, y: 100},
			{type: "payload", x: 0, y: 50},

			{type: "block", x: -50, y: -75},
			{type: "block", x: 50, y: -75},

			{type: "block", x: -75, y: 0},
			{type: "block", x: -75, y: 100},
			{type: "block", x: -75, y: 200},
			{type: "block", x: -75, y: 300},
			{type: "block", x: 0, y: 350},
			{type: "block", x: 100, y: 350},
			{type: "block", x: 200, y: 350},

			{type: "block", x: 100, y: 0},
			{type: "block", x: 100, y: 100},
			{type: "block", x: 100, y: 200},
			{type: "block", x: 200, y: 200},

			{type: "block", x: 200, y: 0},
			{type: "block", x: 300, y: 20},
			{type: "block", x: 300, y: 180},
		],
		[//Defended Spiral
			{type: "blower", x: 0, y: 100},
			{type: "destination", x: -100, y: 0},
			{type: "payload", x: 300, y: 0},


			{type: "block", x: 0, y: -100},
			{type: "block", x: -100, y: -100},
			{type: "block", x: -200, y: -100},
			{type: "block", x: -200, y: 0},
			{type: "block", x: -200, y: 100},
			{type: "block", x: -200, y: 200},
			{type: "block", x: -100, y: 200},
			{type: "block", x: 0, y: 200},
			{type: "block", x: 100, y: 200},
			{type: "block", x: 200, y: 200},
			{type: "block", x: 200, y: 100},
			{type: "block", x: 200, y: 0},
			{type: "block", x: 200, y: -100},
			{type: "block", x: 200, y: -200},
			{type: "block", x: 200, y: -300},
			{type: "block", x: 100, y: -300},
			{type: "block", x: 0, y: -300},
			{type: "block", x: -100, y: -300},
			{type: "block", x: -200, y: -300},
			{type: "block", x: -300, y: -300},
			{type: "block", x: -400, y: -300},
			{type: "block", x: -400, y: -200},
			{type: "block", x: -400, y: -100},
			{type: "block", x: -400, y: 0},
			{type: "block", x: -400, y: 100},
			{type: "block", x: -400, y: 200},
			{type: "block", x: -400, y: 300},
			{type: "block", x: -400, y: 400},
			{type: "block", x: -300, y: 400},
			{type: "block", x: -200, y: 400},
			{type: "block", x: -100, y: 400},
			{type: "block", x: 0, y: 400},
			{type: "block", x: 100, y: 400},
			{type: "block", x: 200, y: 400},
			{type: "block", x: 300, y: 400},
			{type: "block", x: 400, y: 400},
			{type: "block", x: 400, y: 300},
			{type: "block", x: 400, y: 200},
			{type: "block", x: 400, y: 100},
			{type: "block", x: 400, y: 0},

			{type: "turret", x: 0, y: 0, var1: 1, var2: 50},
		],
		[//Thread the Needle
			{type: "blower", x: 100, y: 0},
			{type: "destination", x: 0, y: 0},
			{type: "payload", x: 200, y: 100},


			{type: "block", x: 100, y: 72},
			{type: "block", x: 0, y: 100},
			{type: "block", x: -100, y: 100},
			{type: "block", x: -100, y: 0},
			{type: "block", x: -100, y: -100},
			{type: "block", x: 0, y: -100},
			{type: "block", x: 100, y: -72},
		],
		[//Sniper
			{type: "blower", x: 0, y: -1000},
			{type: "destination", x: 0, y: 750},
			{type: "payload", x: 0, y: -900},

			{type: "turret", x: 0, y: 1000, var1: 0.75, var2: 500},

			{type: "text", x: -200, y: -950, var1: "The gate is way below you."},
			{type: "text", x: -225, y: -850, var1: "There's a turret down there BTW."},
		],
	]
	return LevelList;
}

//Blower 50, Payload 40, Destination 75, Bomb 30, Block 100
