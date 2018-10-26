function EditLevel(sim, levelPlan, type, x, y){
	if(type == "deletePiece"){
		levelPlan.pieceSource.pop()
	}else{
		levelPlan.pieceSource.push({type: type, x: x, y: y})
		sim.addPiece(x, y, type)
	}
}
function MakeLevelList(){

	let backgroundUrlList = [
		"images/background/tarantualNebulaBySuaviLipinski.jpg",
		"images/background/planetAsteroidBelt1a.jpg",
		"images/background/marsByKD.jpg",
		"images/background/asteroidRingsByKD.jpg",
		"images/background/planetMetalByKD.jpg",
		"images/background/iceBelt.jpg",
		"images/background/starsByKD.jpg",

		"images/background/scorpioNebulaByWikimedia.jpg",
		"images/background/prawnNebulaByLaSillaObservatory.jpg",
		"images/background/carinaNebulaBySuaviLipinski.jpg",
		"images/background/catsPawNebulaBySuaviLipinski.jpg",
		"images/background/milkyWayByNasa.jpeg",
		"images/background/milkyWayYellowBallsByNasaJPL.jpg",
		"images/background/carinaNebula2ByWikimedia.jpg",
		"images/background/starNurseryByWikimedia.jpg",
	];
/*
		"images/background/",
		"images/background/",
		"images/background/",
		"images/background/",
		"images/background/",
		"images/background/",
	]
*/
	backgroundUrlList = [
		"images/background/iceBelt.jpg"
	];


	let LevelList = [
		{
			pieceSource: [//Level Builder
				{type: "blower", x: 0, y: 0},
				{type: "gate", x: -200, y: 0},
				{type: "payload", x: 200, y: 0},

				{type: "mine", x: 0, y: 200},

				{type: "barricade", x: 50, y: -150},
				{type: "barricade", x: 50, y: -250},
				{type: "barricade", x: -50, y: -150},
				{type: "barricade", x: -50, y: -250},
			],
		},
		{
			isTutorial: true,
			pieceSource: [//Tutorial 1
				{type: "blower", x: 0, y: -760},
				{type: "gate", x: 920, y: 900},
				{type: "payload", x: 920, y: 800},

				{type: "text", x: -300, y: -800, text: "Press w, a, s, and d to move your ship."},
				{type: "text", x: -300, y: -700, text: "Go down until you see more instructions."},
				{type: "text", x: -300, y: -200, text: "Move the mouse to turn your ship."},
				{type: "text", x: -300, y: -150, text: "Keep going down."},
				{type: "text", x: -300, y: 200, text: "Hold down the mouse to activate your repulser field."},
				{type: "text", x: -300, y: 250, text: "Down again."},
				{type: "text", x: -300, y: 600, text: "Try hitting escape on your keyboard."},
				{type: "text", x: -300, y: 650, text: "Go to the right this time."},
				{type: "text", x: 625, y: 600, text: "Great! Now use your repulser field to push the payload into the Gate."},
				{type: "text", x: 625, y: 810, text: "This is the payload."},
				{type: "text", x: 625, y: 910, text: "This is the gate."},
			],
		},
		{
			isTutorial: true,
			pieceSource: [//Tutorial 2
				{type: "blower", x: -100, y: 0},
				{type: "gate", x: 0, y: 150},
				{type: "payload", x: 0, y: -100},

				{type: "barricade", x: 0, y: 0},

				{type: "text", x: -500, y: -150, text: "Don't let the payload touch the barricade. (The red hexagon thingy)"},
			],
		},
		{
			isTutorial: true,
			pieceSource: [//Tutorial 3
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
		},
		{
			isTutorial: true,
			pieceSource: [//Tutorial 4
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
		},
		{
			pieceSource: [//Minefield
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
		},
		{
			pieceSource: [//Trap
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
		},
		{
			pieceSource: [//Tunnel
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
		},
		{
			pieceSource: [//Out of the Box
				{type: "blower", x: 100, y: 0},
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
		},
		{
			pieceSource: [//Turret
				{type: "blower", x: 0, y: -125},
				{type: "gate", x: 0, y: 200},
				{type: "payload", x: 0, y: -200},

				{type: "turret", x: 0, y: 0, fireDelay: 1, bulletSpeed: 50},

				{type: "text", x: -100, y: -150, text: "This is a turret."},
				{type: "text", x: -200, y: -75, text: "They fire bullets at the payload."},
			],
		},
		{
			pieceSource: [//Fast Turret
				{type: "blower", x: 0, y: -450},
				{type: "gate", x: 0, y: 200},
				{type: "payload", x: 0, y: -400},

				{type: "turret", x: 0, y: 100, fireDelay: 0.5, bulletSpeed: 100},

				{type: "text", x: -400, y: -350, text: "Some turrets fire faster bullets or more frequently than others"},
				{type: "text", x: -100, y: -300, text: "Gate is below."},
			],
		},
		{
			pieceSource: [//Into the Box
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
		},
		{
			pieceSource: [//Blocked Tunnel
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
		},
		{
			pieceSource: [//Deflections
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
		},
		{
			pieceSource: [//Barricaded Tunnel 2
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
		},
		{
			pieceSource: [//Spiral
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
		},
		{
			pieceSource: [//Narrow Tunnel
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
		},
		{
			pieceSource: [//Defended Spiral
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

				{type: "turret", x: 0, y: 0, fireDelay: 1, bulletSpeed: 100},
			],
		},
		{
			pieceSource: [//Thread the Needle
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
		},
		{
			pieceSource: [//Sniper
				{type: "blower", x: 0, y: -1000},
				{type: "gate", x: 0, y: 750},
				{type: "payload", x: 0, y: -900},

				{type: "turret", x: 0, y: 1000, fireDelay: 0.75, bulletSpeed: 500},

				{type: "text", x: -200, y: -950, text: "The gate is way below you."},
				{type: "text", x: -225, y: -850, text: "There's a turret down there BTW."},
			],
		},
		{
			pieceSource: [//Escort
				{type: "blower", x: 0, y: -1000},
				{type: "gate", x: 0, y: 750},
				{type: "payload", x: 0, y: -900},

				{type: "turret", x: 500, y: -800, fireDelay: 0.5, bulletSpeed: 500},
				{type: "turret", x: -500, y: -800, fireDelay: 0.5, bulletSpeed: 500},
				{type: "turret", x: 500, y: 0, fireDelay: 0.5, bulletSpeed: 500},
				{type: "turret", x: -500, y: 0, fireDelay: 0.5, bulletSpeed: 500},
				{type: "turret", x: 500, y: 900, fireDelay: 0.5, bulletSpeed: 500},
				{type: "turret", x: -500, y: 900, fireDelay: 0.5, bulletSpeed: 500},

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
		},
		{
			background: "earthOff",
			background2: "earthOn",
			//zoom: 3,
			isVictoryLevel: true,
			pieceSource: [//Victory
				{type: "blower", x: 0, y: 200},
				{type: "receptical", x: 0, y: 0},
				{type: "payload", x: 0, y: 100},
				
				{type: "text", x: -265, y: 50, text: "You have restored power to the earth.", condition: "power"},
				{type: "text", x: -175, y: 80, text: "Humanity is in your debt.", condition: "power"},
				{type: "text", x: -75, y: 115, text: "Thank you.", condition: "power"},
			],
		}
	]

	for( let i=0 ; i<LevelList.length ; ++i ) {
		LevelList[i].backgroundUrl = backgroundUrlList[i%backgroundUrlList.length];
	}


	return LevelList;
}

//Blower 50, Payload 40, gate 75, Mine 30, Barricade 100
