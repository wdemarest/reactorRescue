function EditLevel(sim, levelPlan, type, x, y, object){
	//levelPlan.pieceSource.push({type: type, x: x, y: y})
	sim.addPiece(x, y, type, object)
}
function MakeLevelList(){

	let backgroundUrlList = [
		//Machine Planet
		"images/background/planetCracked.jpg",
		"images/background/planetMetalByKD.jpg",
		"images/background/machinePlanet.jpg",
		//Lava
		"images/background/planetLavaRinged.png",
		"images/background/planetRingByKD.jpg",
		"images/background/planetLava2Dim.jpg",
		"images/background/lavaWorld.jpg",
		"images/background/lavaRinged.jpg",
		//Green
		"images/background/planetGreen.jpg",
		"images/background/greenMarble.jpg",
		//Eye
		"images/background/planetEyeByKD.jpg",
		//Deep Space
		"images/background/milkyWayByNasa.jpg",
		"images/background/asteroidField.jpg",
		"images/background/planetAsteroidBelt2a.jpg",
		//Sol
		"images/background/planetStriped.jpg",
		"images/background/jupiterAndMoon.jpg",
		"images/background/marsByKD.jpg",
		//Earth
		"images/background/marbleGalaxy.jpg",
		"images/background/asteroidRingsByKD.jpg",
		"images/background/iceBelt.jpg",
	];

//	backgroundUrlList = [
//		"images/background/machinePlanet.jpg"
//	];

	let EditorDefaultLevel = {
		pieceSource: [//Level Builder
			{type: "blower", x: 0, y: 0},
			{type: "gate", x: -200, y: 0},
			{type: "reactor", x: 200, y: 0},

			{type: "mine", x: 0, y: 200},

			{type: "barricade", x: 50, y: -150},
			{type: "barricade", x: 50, y: -250},
			{type: "barricade", x: -50, y: -150},
			{type: "barricade", x: -50, y: -250},
		],
	};

	let LevelList = [
		{
			name: "Blank",
			editorTemplate: true,
			pieceSource: [
				{type: "blower", x: 0, y: 0},
			],
		},
		{
			isTutorial: true,
			boardSize: 3000, 
			name: "Tutorial: Controls",
			pieceSource: [
				{type: "blower", x: 0, y: -760},
				{type: "gate", x: 920, y: 900},
				{type: "reactor", x: 920, y: 800},

				{type: "text", x: -300, y: -800, text: "Press w, a, s, and d to move your ship."},
				{type: "text", x: -300, y: -700, text: "Go down until you see more instructions."},
				{type: "text", x: -300, y: -200, text: "Move the mouse to turn your ship."},
				{type: "text", x: -300, y: -150, text: "Keep going down."},
				{type: "text", x: -300, y: 200, text: "Hold down the mouse to activate your repulser field."},
				{type: "text", x: -300, y: 250, text: "Down again."},
				{type: "text", x: -300, y: 600, text: "Try hitting escape on your keyboard."},
				{type: "text", x: -300, y: 650, text: "Go to the right this time."},
				{type: "text", x: 625, y: 600, text: "Great! Now use your repulser field"},
				{type: "text", x: 625, y: 640, text: "to push the reactor into the Gate."},
				{type: "text", x: 625, y: 810, text: "This is the reactor."},
				{type: "text", x: 625, y: 910, text: "This is the gate."},
			],
		},
		{
			isTutorial: true,
			name: "Tutorial: Barricades",
			pieceSource: [
				{type: "blower", x: 0, y: 0},
				{type: "gate", x: 0, y: 300},
				{type: "reactor", x: 0, y: 100},

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

				{type: "text", x: -500, y: -200, text: "Don't let the reactor touch the barricades. (The red hexagon thingies)"},
			],
		},
		{
			isTutorial: true,
			name: "Tutorial: Around",
			pieceSource: [
				{type: "blower", x: 100, y: 0},
				{type: "gate", x: 0, y: 150},
				{type: "reactor", x: 0, y: -100},

				{type: "barricade", x: 0, y: 0},

				{type: "text", x: -400, y: 0, text: "You'll have to go around."},
			],
		},
		{
			isTutorial: true,
			name: "Tutorial: Mine",
			pieceSource: [
				{type: "blower", x: -0, y: 0},
				{type: "gate", x: 0, y: 300},
				{type: "reactor", x: 0, y: 50},

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

				{type: "mine", x: 0, y: 200},

				{type: "text", x: -400, y: -200, text: "You can't let the reactor touch the mine either. (The little orange circle)"},
				{type: "text", x: -400, y: -150, text: "You'll have to push it out of the way with your repulser field."},
			],
		},
		{
			name: "Minefield",
			pieceSource: [
				{type: "blower", x: 0, y: -100},
				{type: "gate", x: 0, y: 300},
				{type: "reactor", x: 0, y: -50},

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

				{type: "text", x: -300, y: -300, text: "How will you get past all these?"},
			],
		},
		{
			name: "Trap",
			pieceSource: [
				{type: "blower", x: 0, y: -100},
				{type: "gate", x: 0, y: 200},
				{type: "reactor", x: 0, y: 0},

				{type: "mine", x: 65, y: 0},
				{type: "mine", x: 0, y: 65},
				{type: "mine", x: -65, y: 0},
				{type: "mine", x: 0, y: -65},

				{type: "mine", x: 50, y: 50},
				{type: "mine", x: -50, y: -50},
				{type: "mine", x: -50, y: 50},
				{type: "mine", x: 50, y: -50},
				{type: "text", x: -300, y: -300, text: "Your ship can pass through anything safely."},
			],
		},
		{
			name: "Tunnel",
			pieceSource: [
				{type: "blower", x: 0, y: 0},
				{type: "gate", x: 200, y: 100},
				{type: "reactor", x: 0, y: 50},

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
				{type: "text", x: -300, y: -200, text: "Alright, you're on your own. Good luck, captain."},
			],
		},
		{
			name: "Out of the Box",
			pieceSource: [//Out of the Box
				{type: "blower", x: 100, y: 0},
				{type: "gate", x: 0, y: 200},
				{type: "reactor", x: 0, y: 0},

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
			name: "Turret",
			pieceSource: [//Turret
				{type: "blower", x: 0, y: -125},
				{type: "gate", x: 0, y: 200},
				{type: "reactor", x: 0, y: -200},

				{type: "turret", x: 0, y: 0, fireDelay: 1, bulletSpeed: 50},

				{type: "text", x: -100, y: -150, text: "This is a turret."},
				{type: "text", x: -200, y: -75, text: "They fire bullets at the reactor."},
			],
		},
		{
			name: "Fast Turret",
			pieceSource: [//Fast Turret
				{type: "blower", x: 0, y: -450},
				{type: "gate", x: 0, y: 200},
				{type: "reactor", x: 0, y: -400},

				{type: "turret", x: 0, y: 100, fireDelay: 0.5, bulletSpeed: 100},

				{type: "text", x: -400, y: -350, text: "Some turrets fire faster bullets or more frequently than others"},
				{type: "text", x: -100, y: -300, text: "Gate is below."},
			],
		},
		{
			name: "Blocked Tunnel",
			pieceSource: [//Blocked Tunnel
				{type: "blower", x: 0, y: 50},
				{type: "gate", x: 200, y: 0},
				{type: "reactor", x: 0, y: 0},

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
			name: "Into the Box",
			pieceSource: [//Into the Box
				{type: "blower", x: -200, y: 0},
				{type: "gate", x: 0, y: 0},
				{type: "reactor", x: -100, y: 0},

				{type: "turret", x: 200, y: 0, fireDelay: 3, bulletSpeed: 100},

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
			name: "Deflections",
			pieceSource: [//Deflections
				{type: "blower", x: 0, y: 100},
				{type: "gate", x: 0, y: 500},
				{type: "reactor", x: 0, y: 0},

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

				{type: "destructible", x: 0, y: 200},
				{type: "destructible", x: 0, y: 300},
				{type: "destructible", x: 0, y: 400},
				{type: "destructible", x: 0, y: 500},

				{type: "turret", x: 0, y: 600, fireDelay: 2, bulletSpeed: 200},

				{type: "text", x: -250, y: -150, text: "You can push bullets out of the way."},
			],
		},
		{
			name: "Around the Box",
			pieceSource: [//Into the Box
				{type: "blower", x: 0, y: 100},
				{type: "gate", x: 0, y: 0},
				{type: "reactor", x: 0, y: -100},

				{type: "turret", x: 200, y: 0, fireDelay: 1, bulletSpeed: 50, fireType: "phaseBullet"},

				{type: "destructible", x: 0, y: 50},
				{type: "destructible", x: 50, y: 50},
				{type: "destructible", x: 50, y: 0},
				{type: "destructible", x: 50, y: -50},
				{type: "destructible", x: 0, y: -50},
				{type: "destructible", x: -50, y: -50},
				{type: "destructible", x: -50, y: 0},
				{type: "destructible", x: -50, y: 50},

				{type: "text", x: -200, y: -150, text: "These bullets can't be pushed."},
			],
		},
		{
			name: "Fast Deflections",
			pieceSource: [
				{type: "blower", x: 0, y: 50},
				{type: "gate", x: 0, y: 500},
				{type: "reactor", x: 0, y: 0},

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

				{type: "turret", x: 0, y: 600, fireDelay: 1, bulletSpeed: 400},

				{type: "text", x: -250, y: -150, text: "Can you deflect them fast enough?"},
			],
		},
		{
			name: "Blocked Tunnel 2",
			pieceSource: [
				{type: "blower", x: 0, y: 50},
				{type: "gate", x: 200, y: 0},
				{type: "reactor", x: 0, y: 0},

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
			name: "Fixed Angle",
			pieceSource: [
				{type: "blower", x: 0, y: -300},
				{type: "gate", x: 0, y: -100},
				{type: "reactor", x: 0, y: -250},

				{type: "barricade", x: -100, y: -200},
				{type: "barricade", x: -100, y: -100},
				{type: "barricade", x: -100, y: 0},
				{type: "barricade", x: 0, y: 0},
				{type: "barricade", x: 100, y: 0},
				{type: "barricade", x: 100, y: -100},

				{type: "destructible", x: 0, y: -200},

				{type: "turret", x: 100, y: -200, fireDelay: 0.5, bulletSpeed: 250, fireType: "phaseBullet", angle: 180},

				{type: "text", x: -150, y: -400, text: "Some turrets don't turn."},
			],
		},
		{
			name: "Spiral",
			pieceSource: [//Spiral
				{type: "blower", x: 0, y: 100},
				{type: "gate", x: -100, y: 0},
				{type: "reactor", x: 300, y: 0},


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
			name: "Security System",
			pieceSource: [
				{type: "blower", x: 100, y: -200},
				{type: "gate", x: 500, y: -100},
				{type: "reactor", x: 100, y: -100},

				{type: "destructible", x: 100, y: 0},

				{type: "bouncer", x: 400, y: 100, bounceAmount: 1},
				{type: "bouncer", x: 400, y: 200, bounceAmount: 1},
				{type: "bouncer", x: 300, y: 200, bounceAmount: 1},
				{type: "bouncer", x: 200, y: 200, bounceAmount: 1},
				{type: "bouncer", x: 100, y: 200, bounceAmount: 1},
				{type: "bouncer", x: 0, y: 200, bounceAmount: 1},
				{type: "bouncer", x: 0, y: 100, bounceAmount: 1},
				{type: "barricade", x: 0, y: 0},

				{type: "barricade", x: 200, y: 0},
				{type: "bouncer", x: 200, y: -100, bounceAmount: 1},
				{type: "bouncer", x: 200, y: -200, bounceAmount: 1},
				{type: "bouncer", x: 300, y: -200, bounceAmount: 1},
				{type: "bouncer", x: 400, y: -200, bounceAmount: 1},
				{type: "bouncer", x: 500, y: -200, bounceAmount: 1},
				{type: "bouncer", x: 600, y: -200, bounceAmount: 1},
				{type: "bouncer", x: 600, y: -100, bounceAmount: 1},
				{type: "barricade", x: 500, y: 0},

				{type: "turret", x: 400, y: 0, fireDelay: 0.75, bulletSpeed: 250, fireType: "phaseBullet", angle: 180},
				{type: "turret", x: -200, y: 0, fireDelay: 0.75, bulletSpeed: 250, fireType: "phaseBullet", angle: 0},
			],
		},
		{
			name: "Zig Zag of Doom",
			pieceSource: [
				{type: "blower", x: -650, y: 0},
				{type: "gate", x: 250, y: 0},
				{type: "reactor", x: -600, y: 0},

				{type: "destructible", x: -300, y: 100},
				{type: "destructible", x: -300, y: 0},
				{type: "destructible", x: -300, y: -100},

				{type: "bouncer", x: -200, y: 200, bounceAmount: 1},
				{type: "bouncer", x: -100, y: 200, bounceAmount: 1},
				{type: "bouncer", x: 0, y: 200, bounceAmount: 1},
				{type: "bouncer", x: 100, y: 200, bounceAmount: 1},
				{type: "barricade", x: 200, y: 200},
				{type: "barricade", x: 300, y: 200},
				{type: "barricade", x: 400, y: 200},

				{type: "bouncer", x: -200, y: -200, bounceAmount: 1},
				{type: "bouncer", x: -100, y: -200, bounceAmount: 1},
				{type: "bouncer", x: 0, y: -200, bounceAmount: 1},
				{type: "bouncer", x: 100, y: -200, bounceAmount: 1},
				{type: "barricade", x: 200, y: -200},
				{type: "barricade", x: 300, y: -200},
				{type: "barricade", x: 400, y: -200},

				{type: "barricade", x: 400, y: -100},
				{type: "barricade", x: 400, y: 0},
				{type: "barricade", x: 400, y: 100},

				{type: "turret", x: -200, y: 100, fireDelay: 0.5, bulletSpeed: 500, fireType: "phaseBullet", angle: -75},
				{type: "phaseBullet", x: -300, y: -900, xVel: 0, yVel: 500},
			],
		},
		{
			name: "Narrow Tunnel",
			pieceSource: [//Narrow Tunnel
				{type: "blower", x: 0, y: 0},
				{type: "gate", x: 200, y: 100},
				{type: "reactor", x: 0, y: 50},

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
			name: "Defended Spiral",
			pieceSource: [
				{type: "blower", x: 0, y: 100},
				{type: "gate", x: -100, y: 0},
				{type: "reactor", x: 300, y: 0},


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
			name: "Thread the Needle",
			pieceSource: [
				{type: "blower", x: 100, y: 0},
				{type: "gate", x: 0, y: 0},
				{type: "reactor", x: 200, y: 100},


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
			name: "Sniper",
			pieceSource: [
				{type: "blower", x: 0, y: -1000},
				{type: "gate", x: 0, y: 750},
				{type: "reactor", x: 0, y: -900},

				{type: "turret", x: 0, y: 1000, fireDelay: 0.75, bulletSpeed: 500},

				{type: "text", x: -200, y: -950, text: "The gate is way below you."},
				{type: "text", x: -225, y: -850, text: "There's a turret down there BTW."},
			],
		},
		{
			name: "Escort",
			pieceSource: [
				{type: "blower", x: 0, y: -1000},
				{type: "gate", x: 0, y: 750},
				{type: "reactor", x: 0, y: -900},

				{type: "turret", x: 500, y: -800, fireDelay: 0.5, bulletSpeed: 500, fireType: "phaseBullet"},
				{type: "turret", x: -500, y: -800, fireDelay: 0.5, bulletSpeed: 500, fireType: "phaseBullet"},
				{type: "turret", x: 500, y: 0, fireDelay: 0.5, bulletSpeed: 500, fireType: "phaseBullet"},
				{type: "turret", x: -500, y: 0, fireDelay: 0.5, bulletSpeed: 500, fireType: "phaseBullet"},
				{type: "turret", x: 500, y: 900, fireDelay: 0.5, bulletSpeed: 500, fireType: "phaseBullet"},
				{type: "turret", x: -500, y: 900, fireDelay: 0.5, bulletSpeed: 500, fireType: "phaseBullet"},

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
			name: "Victory",
			pieceSource: [
				{type: "blower", x: 0, y: 200},
				{type: "receptical", x: 0, y: 0},
				{type: "reactor", x: 0, y: 100},
				
				{type: "text", x: -265, y: 50, text: "You have restored power to the earth.", condition: "power"},
				{type: "text", x: -175, y: 80, text: "Humanity is in your debt.", condition: "power"},
				{type: "text", x: -75, y: 115, text: "Thank you.", condition: "power"},

				{type: "text", x: -75, y: 650, text: "CREDITS", condition: "power"},
				{type: "text", x: -300, y: 700, text: "Producer: Will Demarest", condition: "power"},
				{type: "text", x: -300, y: 750, text: "Game Designers: Will Demarest, Ken Demarest", condition: "power"},
				{type: "text", x: -300, y: 800, text: "Programmers: Will Demarest", condition: "power"},
				{type: "text", x: -300, y: 850, text: "Sound Designers: Will Demarest, Ken Demarest", condition: "power"},
				{type: "text", x: -300, y: 900, text: "Artists: Aleksey Goldis, Will Demarest, Ken Demarest", condition: "power"},
				{type: "text", x: -150, y: 975, text: "Thank You for Playing.", condition: "power"},
				//{type: "text", x: -300, y: 950, text: "Press esc to leave the game.", condition: "power"},
			],
		}
	]

	for( let i=0 ; i<LevelList.length ; ++i ) {
		if( !LevelList[i].background ) {
			LevelList[i].backgroundUrl = backgroundUrlList[i%backgroundUrlList.length];
		}
	}


	return LevelList;
}

//Blower 50, reactor 40, gate 75, Mine 30, Barricade 100
