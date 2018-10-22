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
			{type: "gate", x: -200, y: 0},
			{type: "payload", x: 200, y: 0},

			{type: "mine", x: 0, y: 200},

			{type: "barricade", x: 50, y: -150},
			{type: "barricade", x: 50, y: -250},
			{type: "barricade", x: -50, y: -150},
			{type: "barricade", x: -50, y: -250},
		],
		[//Tutorial 1
			{type: "blower", x: 0, y: -50},
			{type: "gate", x: 0, y: 100},
			{type: "payload", x: 0, y: 0},

			{type: "text", x: -300, y: -150, text: "Welcome! Move the mouse to turn your ship."},
			{type: "text", x: -300, y: -100, text: "Put your mouse pointer below your ship and click."},
			{type: "text", x: -250, y: 0, text: "This is your ship."},
		],
		[//Tutorial 2
			{type: "blower", x: 0, y: -760},
			{type: "gate", x: 0, y: 900},
			{type: "payload", x: 0, y: 800},

			{type: "text", x: -300, y: -800, text: "Press w, a, s, and d to move your ship."},
			{type: "text", x: -300, y: -700, text: "Go down until you see more instructions."},
			{type: "text", x: -300, y: -200, text: "Move the mouse to turn your ship."},
			{type: "text", x: -300, y: -150, text: "Keep going down."},
			{type: "text", x: -300, y: 200, text: "Hold down the mouse to activate your repulser field."},
			{type: "text", x: -300, y: 250, text: "Down again."},
			{type: "text", x: -300, y: 600, text: "Great! Now use your repulser field to push the payload into the Gate."},
			{type: "text", x: -300, y: 810, text: "This is the payload."},
			{type: "text", x: -300, y: 910, text: "This is the gate."},
		],
		[//Tutorial 3
			{type: "blower", x: -100, y: 0},
			{type: "gate", x: 0, y: 150},
			{type: "payload", x: 0, y: -100},

			{type: "barricade", x: 0, y: 0},

			{type: "text", x: -500, y: -150, text: "Don't let the payload touch the barricade. (The red hexagon thingy)"},
		],
		[//Tutorial 4
			{type: "blower", x: -0, y: -150},
			{type: "gate", x: 0, y: 300},
			{type: "payload", x: 0, y: 0},

			{type: "barricade", x: -50, y: -75},
			{type: "barricade", x: 50, y: -75},

			{type: "barricade", x: -100, y: 0},
			{type: "barricade", x: -100, y: 100},
			{type: "barricade", x: -100, y: 200},
			{type: "barricade", x: -100, y: 300},

			{type: "barricade", x: 100, y: 0},
			{type: "barricade", x: 100, y: 100},
			{type: "barricade", x: 100, y: 200},
			{type: "barricade", x: 100, y: 300},

			{type: "text", x: -400, y: -200, text: "Your ship can pass safely through anything."},
		],
		[//Tutorial 5
			{type: "blower", x: -0, y: 0},
			{type: "gate", x: 0, y: 500},
			{type: "payload", x: 0, y: 100},

			{type: "barricade", x: -50, y: -75},
			{type: "barricade", x: 50, y: -75},

			{type: "barricade", x: -100, y: 0},
			{type: "barricade", x: -100, y: 100},
			{type: "barricade", x: -100, y: 200},
			{type: "barricade", x: -100, y: 300},
			{type: "barricade", x: -100, y: 400},
			{type: "barricade", x: -100, y: 500},

			{type: "barricade", x: 100, y: 0},
			{type: "barricade", x: 100, y: 100},
			{type: "barricade", x: 100, y: 200},
			{type: "barricade", x: 100, y: 300},
			{type: "barricade", x: 100, y: 400},
			{type: "barricade", x: 100, y: 500},

			{type: "mine", x: 0, y: 150},
			{type: "mine", x: 0, y: 200},
			{type: "mine", x: 0, y: 250},
			{type: "mine", x: 0, y: 300},

			{type: "text", x: -400, y: -200, text: "You can't let the payload touch the mines either. (The little orange circles)"},
			{type: "text", x: -400, y: -150, text: "You'll have to push them out of the way with your repulser field."},
		],
		[//Minefield
			{type: "blower", x: 0, y: -100},
			{type: "gate", x: 0, y: 300},
			{type: "payload", x: 0, y: -50},

			{type: "mine", x: 0, y: 0},
			{type: "mine", x: 0, y: 50},
			{type: "mine", x: 0, y: 100},
			{type: "mine", x: 0, y: 150},
			{type: "mine", x: 0, y: 200},

			{type: "mine", x: 50, y: 0},
			{type: "mine", x: 50, y: 50},
			{type: "mine", x: 50, y: 100},
			{type: "mine", x: 50, y: 150},
			{type: "mine", x: 50, y: 200},

			{type: "mine", x: 100, y: 0},
			{type: "mine", x: 100, y: 50},
			{type: "mine", x: 100, y: 100},
			{type: "mine", x: 100, y: 150},
			{type: "mine", x: 100, y: 200},

			{type: "mine", x: -50, y: 0},
			{type: "mine", x: -50, y: 50},
			{type: "mine", x: -50, y: 100},
			{type: "mine", x: -50, y: 150},
			{type: "mine", x: -50, y: 200},

			{type: "mine", x: -100, y: 0},
			{type: "mine", x: -100, y: 50},
			{type: "mine", x: -100, y: 100},
			{type: "mine", x: -100, y: 150},
			{type: "mine", x: -100, y: 200},

			{type: "barricade", x: -100, y: -200},
			{type: "barricade", x: 0, y: -200},
			{type: "barricade", x: 100, y: -200},

			{type: "barricade", x: -100, y: 400},
			{type: "barricade", x: 0, y: 400},
			{type: "barricade", x: 100, y: 400},

			{type: "barricade", x: -200, y: -200},
			{type: "barricade", x: -200, y: -100},
			{type: "barricade", x: -200, y: 0},
			{type: "barricade", x: -200, y: 100},
			{type: "barricade", x: -200, y: 200},
			{type: "barricade", x: -200, y: 300},
			{type: "barricade", x: -200, y: 400},

			{type: "barricade", x: 200, y: -200},
			{type: "barricade", x: 200, y: -100},
			{type: "barricade", x: 200, y: 0},
			{type: "barricade", x: 200, y: 100},
			{type: "barricade", x: 200, y: 200},
			{type: "barricade", x: 200, y: 300},
			{type: "barricade", x: 200, y: 400},

			{type: "text", x: -300, y: -300, text: "Alright, you're on your own for now. Good luck!"},
		],
		[//Trap
			{type: "blower", x: 0, y: -100},
			{type: "gate", x: 0, y: 200},
			{type: "payload", x: 0, y: 0},

			{type: "mine", x: 40, y: 0},
			{type: "mine", x: 0, y: 40},
			{type: "mine", x: -40, y: 0},
			{type: "mine", x: 0, y: -40},

			{type: "mine", x: 35, y: 35},
			{type: "mine", x: -35, y: -35},
			{type: "mine", x: -35, y: 35},
			{type: "mine", x: 35, y: -35},
		],
		[//Tunnel
			{type: "blower", x: 0, y: 0},
			{type: "gate", x: 200, y: 100},
			{type: "payload", x: 0, y: 50},

			{type: "barricade", x: -50, y: -75},
			{type: "barricade", x: 50, y: -75},

			{type: "barricade", x: -100, y: 0},
			{type: "barricade", x: -100, y: 100},
			{type: "barricade", x: -100, y: 200},
			{type: "barricade", x: -100, y: 300},
			{type: "barricade", x: -100, y: 400},
			{type: "barricade", x: 0, y: 400},
			{type: "barricade", x: 100, y: 400},
			{type: "barricade", x: 200, y: 400},

			{type: "barricade", x: 100, y: 0},
			{type: "barricade", x: 100, y: 100},
			{type: "barricade", x: 100, y: 200},
			{type: "barricade", x: 200, y: 200},

			{type: "barricade", x: 200, y: 0},
			{type: "barricade", x: 300, y: 20},
			{type: "barricade", x: 300, y: 180},
		],
		[//Out of the Box
			{type: "blower", x: 0, y: 0},
			{type: "gate", x: 0, y: 200},
			{type: "payload", x: 0, y: 0},

			{type: "mine", x: 0, y: 100},

			{type: "destructible", x: 0, y: 50},
			{type: "destructible", x: 50, y: 50},
			{type: "destructible", x: 50, y: 0},
			{type: "destructible", x: 50, y: -50},
			{type: "destructible", x: 0, y: -50},
			{type: "destructible", x: -50, y: -50},
			{type: "destructible", x: -50, y: 0},
			{type: "destructible", x: -50, y: 50},

			{type: "text", x: -300, y: -100, text: "If a mine touches a box, the box is destroyed."},
		],
		[//Turret
			{type: "blower", x: 0, y: -125},
			{type: "gate", x: 0, y: 200},
			{type: "payload", x: 0, y: -200},

			{type: "turret", x: 0, y: 0, fireDelay: 2, bulletSpeed: 50},

			{type: "text", x: -100, y: -150, text: "This is a turret."},
			{type: "text", x: -200, y: -75, text: "They fire bullets at the payload."},
		],
		[//Fast Turret
			{type: "blower", x: 0, y: -450},
			{type: "gate", x: 0, y: 200},
			{type: "payload", x: 0, y: -400},

			{type: "turret", x: 0, y: 100, fireDelay: 0.5, bulletSpeed: 100},

			{type: "text", x: -400, y: -350, text: "Some turrets fire faster bullets or more frequently than others"},
			{type: "text", x: -100, y: -300, text: "Gate is below."},
		],
		[//Into the Box
			{type: "blower", x: 0, y: 100},
			{type: "gate", x: 0, y: 0},
			{type: "payload", x: 0, y: -100},

			{type: "turret", x: 200, y: 0, fireDelay: 1, bulletSpeed: 50},

			{type: "destructible", x: 0, y: 50},
			{type: "destructible", x: 50, y: 50},
			{type: "destructible", x: 50, y: 0},
			{type: "destructible", x: 50, y: -50},
			{type: "destructible", x: 0, y: -50},
			{type: "destructible", x: -50, y: -50},
			{type: "destructible", x: -50, y: 0},
			{type: "destructible", x: -50, y: 50},

			{type: "text", x: -200, y: -150, text: "Bullets can also destroy boxes."},
		],
		[//Barricadeed Tunnel
			{type: "blower", x: 0, y: 50},
			{type: "gate", x: 200, y: 0},
			{type: "payload", x: 0, y: 0},

			{type: "barricade", x: -50, y: -75},
			{type: "barricade", x: 50, y: -75},

			{type: "barricade", x: -100, y: 0},
			{type: "barricade", x: -100, y: 100},
			{type: "barricade", x: -100, y: 200},
			{type: "barricade", x: -100, y: 300},
			{type: "barricade", x: -100, y: 400},
			{type: "barricade", x: -100, y: 500},
			{type: "barricade", x: 0, y: 500},

			{type: "barricade", x: 100, y: 0},
			{type: "barricade", x: 100, y: 100},
			{type: "barricade", x: 100, y: 200},
			{type: "barricade", x: 100, y: 300},
			{type: "barricade", x: 100, y: 500},

			{type: "destructible", x: 0, y: 100},
			{type: "destructible", x: 0, y: 200},
			{type: "destructible", x: 0, y: 300},
			{type: "destructible", x: 0, y: 400},
			{type: "destructible", x: 100, y: 400},

			{type: "mine", x: 200, y: 0},
		],
		[//Deflections
			{type: "blower", x: 0, y: 50},
			{type: "gate", x: 0, y: 500},
			{type: "payload", x: 0, y: 0},

			{type: "barricade", x: -50, y: -75},
			{type: "barricade", x: 50, y: -75},

			{type: "barricade", x: -100, y: 0},
			{type: "barricade", x: -100, y: 100},
			{type: "barricade", x: -100, y: 200},
			{type: "barricade", x: -100, y: 300},
			{type: "barricade", x: -100, y: 400},
			{type: "barricade", x: -100, y: 500},

			{type: "barricade", x: 100, y: 0},
			{type: "barricade", x: 100, y: 100},
			{type: "barricade", x: 100, y: 200},
			{type: "barricade", x: 100, y: 300},
			{type: "barricade", x: 100, y: 400},
			{type: "barricade", x: 100, y: 500},

			{type: "destructible", x: 0, y: 100},
			{type: "destructible", x: 0, y: 200},
			{type: "destructible", x: 0, y: 300},
			{type: "destructible", x: 0, y: 400},
			{type: "destructible", x: 0, y: 500},

			{type: "turret", x: 0, y: 600, fireDelay: 1, bulletSpeed: 100},

			{type: "text", x: -250, y: -150, text: "You can blow bullets out of the way."},
		],		
		[//Barricadeed Tunnel 2
			{type: "blower", x: 0, y: 50},
			{type: "gate", x: 200, y: 0},
			{type: "payload", x: 0, y: 0},

			{type: "barricade", x: -50, y: -75},
			{type: "barricade", x: 50, y: -75},

			{type: "barricade", x: -100, y: 0},
			{type: "barricade", x: -100, y: 100},
			{type: "barricade", x: -100, y: 200},
			{type: "barricade", x: -100, y: 300},
			{type: "barricade", x: -100, y: 400},
			{type: "barricade", x: -100, y: 500},
			{type: "barricade", x: 0, y: 500},
			{type: "barricade", x: 100, y: 500},
			{type: "barricade", x: 200, y: 500},

			{type: "barricade", x: 100, y: 0},
			{type: "barricade", x: 100, y: 100},
			{type: "barricade", x: 100, y: 200},
			{type: "barricade", x: 100, y: 300},
			{type: "barricade", x: 100, y: 500},

			{type: "barricade", x: 300, y: 0},
			{type: "barricade", x: 300, y: 100},
			{type: "barricade", x: 300, y: 200},
			{type: "barricade", x: 300, y: 300},
			{type: "barricade", x: 300, y: 400},
			{type: "barricade", x: 300, y: 500},

			{type: "destructible", x: 200, y: 100},
			{type: "destructible", x: 200, y: 200},
			{type: "destructible", x: 200, y: 300},

			{type: "turret", x: 300, y: 200, fireDelay: 1, bulletSpeed: 50},
		],
		[//Defended Spiral
			{type: "blower", x: 0, y: 100},
			{type: "gate", x: -100, y: 0},
			{type: "payload", x: 300, y: 0},


			{type: "barricade", x: 0, y: 0},
			{type: "barricade", x: 0, y: -100},
			{type: "barricade", x: -100, y: -100},
			{type: "barricade", x: -200, y: -100},
			{type: "barricade", x: -200, y: 0},
			{type: "barricade", x: -200, y: 100},
			{type: "barricade", x: -200, y: 200},
			{type: "barricade", x: -100, y: 200},
			{type: "barricade", x: 0, y: 200},
			{type: "barricade", x: 100, y: 200},
			{type: "barricade", x: 200, y: 200},
			{type: "barricade", x: 200, y: 100},
			{type: "barricade", x: 200, y: 0},
			{type: "barricade", x: 200, y: -100},
			{type: "barricade", x: 200, y: -200},
			{type: "barricade", x: 200, y: -300},
			{type: "barricade", x: 100, y: -300},
			{type: "barricade", x: 0, y: -300},
			{type: "barricade", x: -100, y: -300},
			{type: "barricade", x: -200, y: -300},
			{type: "barricade", x: -300, y: -300},
			{type: "barricade", x: -400, y: -300},
			{type: "barricade", x: -400, y: -200},
			{type: "barricade", x: -400, y: -100},
			{type: "barricade", x: -400, y: 0},
			{type: "barricade", x: -400, y: 100},
			{type: "barricade", x: -400, y: 200},
			{type: "barricade", x: -400, y: 300},
			{type: "barricade", x: -400, y: 400},
			{type: "barricade", x: -300, y: 400},
			{type: "barricade", x: -200, y: 400},
			{type: "barricade", x: -100, y: 400},
			{type: "barricade", x: 0, y: 400},
			{type: "barricade", x: 100, y: 400},
			{type: "barricade", x: 200, y: 400},
			{type: "barricade", x: 300, y: 400},
			{type: "barricade", x: 400, y: 400},
			{type: "barricade", x: 400, y: 300},
			{type: "barricade", x: 400, y: 200},
			{type: "barricade", x: 400, y: 100},
			{type: "barricade", x: 400, y: 0},
		],
		[//Narrow Tunnel
			{type: "blower", x: 0, y: 0},
			{type: "gate", x: 200, y: 100},
			{type: "payload", x: 0, y: 50},

			{type: "barricade", x: -50, y: -75},
			{type: "barricade", x: 50, y: -75},

			{type: "barricade", x: -75, y: 0},
			{type: "barricade", x: -75, y: 100},
			{type: "barricade", x: -75, y: 200},
			{type: "barricade", x: -75, y: 300},
			{type: "barricade", x: 0, y: 350},
			{type: "barricade", x: 100, y: 350},
			{type: "barricade", x: 200, y: 350},

			{type: "barricade", x: 100, y: 0},
			{type: "barricade", x: 100, y: 100},
			{type: "barricade", x: 100, y: 200},
			{type: "barricade", x: 200, y: 200},

			{type: "barricade", x: 200, y: 0},
			{type: "barricade", x: 300, y: 20},
			{type: "barricade", x: 300, y: 180},
		],
		[//Defended Spiral
			{type: "blower", x: 0, y: 100},
			{type: "gate", x: -100, y: 0},
			{type: "payload", x: 300, y: 0},


			{type: "barricade", x: 0, y: -100},
			{type: "barricade", x: -100, y: -100},
			{type: "barricade", x: -200, y: -100},
			{type: "barricade", x: -200, y: 0},
			{type: "barricade", x: -200, y: 100},
			{type: "barricade", x: -200, y: 200},
			{type: "barricade", x: -100, y: 200},
			{type: "barricade", x: 0, y: 200},
			{type: "barricade", x: 100, y: 200},
			{type: "barricade", x: 200, y: 200},
			{type: "barricade", x: 200, y: 100},
			{type: "barricade", x: 200, y: 0},
			{type: "barricade", x: 200, y: -100},
			{type: "barricade", x: 200, y: -200},
			{type: "barricade", x: 200, y: -300},
			{type: "barricade", x: 100, y: -300},
			{type: "barricade", x: 0, y: -300},
			{type: "barricade", x: -100, y: -300},
			{type: "barricade", x: -200, y: -300},
			{type: "barricade", x: -300, y: -300},
			{type: "barricade", x: -400, y: -300},
			{type: "barricade", x: -400, y: -200},
			{type: "barricade", x: -400, y: -100},
			{type: "barricade", x: -400, y: 0},
			{type: "barricade", x: -400, y: 100},
			{type: "barricade", x: -400, y: 200},
			{type: "barricade", x: -400, y: 300},
			{type: "barricade", x: -400, y: 400},
			{type: "barricade", x: -300, y: 400},
			{type: "barricade", x: -200, y: 400},
			{type: "barricade", x: -100, y: 400},
			{type: "barricade", x: 0, y: 400},
			{type: "barricade", x: 100, y: 400},
			{type: "barricade", x: 200, y: 400},
			{type: "barricade", x: 300, y: 400},
			{type: "barricade", x: 400, y: 400},
			{type: "barricade", x: 400, y: 300},
			{type: "barricade", x: 400, y: 200},
			{type: "barricade", x: 400, y: 100},
			{type: "barricade", x: 400, y: 0},

			{type: "turret", x: 0, y: 0, fireDelay: 1, bulletSpeed: 50},
		],
		[//Thread the Needle
			{type: "blower", x: 100, y: 0},
			{type: "gate", x: 0, y: 0},
			{type: "payload", x: 200, y: 100},


			{type: "barricade", x: 100, y: 72},
			{type: "barricade", x: 0, y: 100},
			{type: "barricade", x: -100, y: 100},
			{type: "barricade", x: -100, y: 0},
			{type: "barricade", x: -100, y: -100},
			{type: "barricade", x: 0, y: -100},
			{type: "barricade", x: 100, y: -72},
		],
		[//Sniper
			{type: "blower", x: 0, y: -1000},
			{type: "gate", x: 0, y: 750},
			{type: "payload", x: 0, y: -900},

			{type: "turret", x: 0, y: 1000, fireDelay: 0.75, bulletSpeed: 500},

			{type: "text", x: -200, y: -950, text: "The gate is way below you."},
			{type: "text", x: -225, y: -850, text: "There's a turret down there BTW."},
		],
		[//Escort
			{type: "blower", x: 0, y: -1000},
			{type: "gate", x: 0, y: 750},
			{type: "payload", x: 0, y: -900},

			{type: "turret", x: 500, y: -800, fireDelay: 0.5, bulletSpeed: 400},
			{type: "turret", x: -500, y: -800, fireDelay: 0.5, bulletSpeed: 400},
			{type: "turret", x: 500, y: 0, fireDelay: 0.5, bulletSpeed: 400},
			{type: "turret", x: -500, y: 0, fireDelay: 0.5, bulletSpeed: 400},
			{type: "turret", x: 500, y: 900, fireDelay: 0.5, bulletSpeed: 400},
			{type: "turret", x: -500, y: 900, fireDelay: 0.5, bulletSpeed: 400},

			{type: "barricade", x: 0, y: -500},

			{type: "barricade", x: -100, y: 0},
			{type: "barricade", x: -200, y: 0},
			{type: "barricade", x: -300, y: 0},
			{type: "barricade", x: -400, y: 0},
			{type: "barricade", x: 100, y: 0},
			{type: "barricade", x: 200, y: 0},
			{type: "barricade", x: 300, y: 0},
			{type: "barricade", x: 400, y: 0},

			{type: "text", x: -200, y: -950, text: "The gate is way below you."},
			{type: "text", x: -150, y: -850, text: "There are turrets too."},
		],
	]
	return LevelList;
}

//Blower 50, Payload 40, gate 75, Mine 30, Barricade 100
