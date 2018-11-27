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

	let LevelList = [
		{
			name: "Blank",
			pieceSource: [
				{type: "blower", x: 0, y: 0},
			],
		},
		{
			name: "Tutorial: Controls",
			pieceSource: [
				{type: "blower", x: 0, y: -760},
				{type: "gate", x: 920, y: 900},
				{type: "reactor", x: 920, y: 800},

				{type: "text", x: -300, y: -800, text: "Press w, a, s, and d to move your ship."},
				{type: "text", x: -300, y: -700, text: "Go bottom until you see more instructions."},
				{type: "text", x: -300, y: -200, text: "Move the mouse to turn your ship."},
				{type: "text", x: -300, y: -150, text: "Keep going bottom."},
				{type: "text", x: -300, y: 200, text: "Hold bottom the mouse to activate your repulser field."},
				{type: "text", x: -300, y: 250, text: "bottom again."},
				{type: "text", x: -300, y: 600, text: "Try hitting escape on your keyboundary."},
				{type: "text", x: -300, y: 650, text: "Go to the right this time."},
				{type: "text", x: 625, y: 600, text: "Great! Now use your repulser field"},
				{type: "text", x: 625, y: 640, text: "to push the reactor into the Gate."},
				{type: "text", x: 625, y: 810, text: "This is the reactor."},
				{type: "text", x: 625, y: 910, text: "This is the gate."},
			],
		},
		{
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
				{type: "text", x: -225, y: -850, text: "There's a turret bottom there BTW."},
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
			name: "Bouncy Box",
			pieceSource: [{"type":"gate","x":500,"y":-200},{"type":"bouncer","x":-100,"y":-400,"bounceAmount":1},{"type":"bouncer","x":300,"y":-400,"bounceAmount":1},{"type":"bouncer","x":0,"y":-400,"bounceAmount":1},{"type":"bouncer","x":-100,"y":0,"bounceAmount":1},{"type":"bouncer","x":400,"y":-100,"bounceAmount":1},{"type":"bouncer","x":500,"y":-400,"bounceAmount":1},{"type":"bouncer","x":400,"y":-400,"bounceAmount":1},{"type":"bouncer","x":-100,"y":-300,"bounceAmount":1},{"type":"bouncer","x":0,"y":100,"bounceAmount":1},{"type":"bouncer","x":100,"y":-400,"bounceAmount":1},{"type":"bouncer","x":-100,"y":-200,"bounceAmount":1},{"type":"bouncer","x":200,"y":-400,"bounceAmount":1},{"type":"bouncer","x":400,"y":0,"bounceAmount":1},{"type":"bouncer","x":300,"y":100,"bounceAmount":1},{"type":"bouncer","x":100,"y":100,"bounceAmount":1},{"type":"bouncer","x":600,"y":-300,"bounceAmount":1},{"type":"bouncer","x":400,"y":100,"bounceAmount":1},{"type":"bouncer","x":400,"y":-200,"bounceAmount":1},{"type":"bouncer","x":500,"y":-100,"bounceAmount":1},{"type":"bouncer","x":200,"y":100,"bounceAmount":1},{"type":"bouncer","x":600,"y":-200,"bounceAmount":1},{"type":"bouncer","x":-100,"y":-100,"bounceAmount":1},{"type":"bouncer","x":600,"y":-100,"bounceAmount":1},{"type":"bouncer","x":600,"y":-400,"bounceAmount":1},{"type":"bouncer","x":-100,"y":100,"bounceAmount":1},{"type":"bullet","x":0,"y":-100},{"type":"bullet","x":250,"y":-300},{"type":"bullet","x":200,"y":-200},{"type":"bullet","x":0,"y":-250},{"type":"bullet","x":150,"y":0},{"type":"bullet","x":100,"y":-300},{"type":"bullet","x":100,"y":0},{"type":"bullet","x":300,"y":-250},{"type":"bullet","x":200,"y":0},{"type":"bullet","x":250,"y":-50},{"type":"bullet","x":300,"y":-100},{"type":"bullet","x":50,"y":-300},{"type":"bullet","x":150,"y":-300},{"type":"bullet","x":300,"y":-200},{"type":"bullet","x":300,"y":-150},{"type":"bullet","x":300,"y":-300},{"type":"bullet","x":250,"y":-150},{"type":"bullet","x":50,"y":-200},{"type":"bullet","x":50,"y":-250},{"type":"bullet","x":50,"y":-150},{"type":"bullet","x":300,"y":0},{"type":"bullet","x":300,"y":-50},{"type":"bullet","x":150,"y":-200},{"type":"bullet","x":250,"y":0},{"type":"bullet","x":0,"y":-300},{"type":"bullet","x":100,"y":-100},{"type":"bullet","x":150,"y":-250},{"type":"bullet","x":150,"y":-100},{"type":"bullet","x":100,"y":-50},{"type":"bullet","x":200,"y":-150},{"type":"bullet","x":200,"y":-100},{"type":"bullet","x":50,"y":-100},{"type":"bullet","x":200,"y":-300},{"type":"bullet","x":150,"y":-50},{"type":"bullet","x":100,"y":-150},{"type":"bullet","x":200,"y":-50},{"type":"bullet","x":0,"y":-150},{"type":"bullet","x":200,"y":-250},{"type":"bullet","x":100,"y":-200},{"type":"bullet","x":250,"y":-250},{"type":"bullet","x":250,"y":-100},{"type":"bullet","x":150,"y":-150},{"type":"bullet","x":250,"y":-200},{"type":"bullet","x":100,"y":-250},{"type":"bullet","x":0,"y":-200},{"type":"reactor","x":50,"y":-50},{"type":"blower","x":0,"y":0,"angle":0}],
		},
		{
			name: "Blocked Spiral",
			pieceSource: [{"type":"gate","x":-100,"y":0},{"type":"barricade","x":0,"y":-100},{"type":"bouncer","x":-400,"y":-200,"bounceAmount":1},{"type":"barricade","x":-200,"y":-100},{"type":"barricade","x":200,"y":-100},{"type":"bouncer","x":-300,"y":400,"bounceAmount":1},{"type":"bouncer","x":400,"y":300,"bounceAmount":1},{"type":"bouncer","x":-400,"y":-100,"bounceAmount":1},{"type":"barricade","x":0,"y":200},{"type":"bouncer","x":-400,"y":0,"bounceAmount":1},{"type":"bouncer","x":-100,"y":400,"bounceAmount":1},{"type":"bouncer","x":-100,"y":-300,"bounceAmount":1},{"type":"bouncer","x":-300,"y":-300,"bounceAmount":1},{"type":"barricade","x":200,"y":100},{"type":"bouncer","x":400,"y":-100,"bounceAmount":1},{"type":"bouncer","x":-400,"y":300,"bounceAmount":1},{"type":"barricade","x":-200,"y":200},{"type":"barricade","x":0,"y":0},{"type":"bouncer","x":0,"y":-300,"bounceAmount":1},{"type":"bouncer","x":200,"y":-300,"bounceAmount":1},{"type":"bouncer","x":-400,"y":-300,"bounceAmount":1},{"type":"bouncer","x":200,"y":400,"bounceAmount":1},{"type":"bouncer","x":-200,"y":-300,"bounceAmount":1},{"type":"bouncer","x":100,"y":-300,"bounceAmount":1},{"type":"bouncer","x":100,"y":400,"bounceAmount":1},{"type":"bouncer","x":400,"y":200,"bounceAmount":1},{"type":"barricade","x":-100,"y":200},{"type":"bouncer","x":-200,"y":400,"bounceAmount":1},{"type":"barricade","x":200,"y":0},{"type":"barricade","x":-200,"y":100},{"type":"bouncer","x":400,"y":100,"bounceAmount":1},{"type":"bouncer","x":-400,"y":200,"bounceAmount":1},{"type":"bouncer","x":400,"y":0,"bounceAmount":1},{"type":"bouncer","x":400,"y":-300,"bounceAmount":1},{"type":"bouncer","x":-400,"y":100,"bounceAmount":1},{"type":"barricade","x":100,"y":200},{"type":"bouncer","x":300,"y":400,"bounceAmount":1},{"type":"bouncer","x":400,"y":-200,"bounceAmount":1},{"type":"barricade","x":200,"y":-200},{"type":"barricade","x":-100,"y":-100},{"type":"barricade","x":-200,"y":0},{"type":"bouncer","x":0,"y":400,"bounceAmount":1},{"type":"barricade","x":200,"y":200},{"type":"bouncer","x":-400,"y":400,"bounceAmount":1},{"type":"bouncer","x":300,"y":-300,"bounceAmount":1},{"type":"bouncer","x":400,"y":400,"bounceAmount":1},{"type":"bullet","x":-300,"y":-50},{"type":"bullet","x":300,"y":200},{"type":"bullet","x":-300,"y":50},{"type":"bullet","x":0,"y":300},{"type":"bullet","x":-200,"y":300},{"type":"bullet","x":-300,"y":300},{"type":"bullet","x":-250,"y":-200},{"type":"bullet","x":100,"y":50},{"type":"bullet","x":300,"y":100},{"type":"bullet","x":-300,"y":0},{"type":"bullet","x":-300,"y":-100},{"type":"bullet","x":250,"y":300},{"type":"bullet","x":-150,"y":300},{"type":"bullet","x":100,"y":-200},{"type":"bullet","x":300,"y":150},{"type":"bullet","x":100,"y":300},{"type":"bullet","x":-100,"y":100},{"type":"bullet","x":100,"y":-100},{"type":"bullet","x":0,"y":-200},{"type":"bullet","x":300,"y":0},{"type":"bullet","x":-50,"y":-200},{"type":"bullet","x":-300,"y":100},{"type":"bullet","x":-100,"y":-200},{"type":"bullet","x":-300,"y":-200},{"type":"bullet","x":-150,"y":-200},{"type":"bullet","x":300,"y":50},{"type":"bullet","x":50,"y":100},{"type":"bullet","x":-300,"y":200},{"type":"bullet","x":100,"y":-150},{"type":"bullet","x":0,"y":100},{"type":"bullet","x":-50,"y":300},{"type":"bullet","x":-300,"y":-150},{"type":"bullet","x":100,"y":-50},{"type":"bullet","x":-300,"y":150},{"type":"bullet","x":100,"y":0},{"type":"bullet","x":100,"y":100},{"type":"bullet","x":300,"y":300},{"type":"bullet","x":200,"y":300},{"type":"bullet","x":300,"y":250},{"type":"bullet","x":-50,"y":100},{"type":"bullet","x":150,"y":300},{"type":"bullet","x":300,"y":-50},{"type":"bullet","x":-300,"y":250},{"type":"bullet","x":50,"y":-200},{"type":"bullet","x":-200,"y":-200},{"type":"bullet","x":50,"y":300},{"type":"bullet","x":-250,"y":300},{"type":"bullet","x":-100,"y":300},{"type":"reactor","x":300,"y":-100},{"type":"blower","x":300,"y":-200,"angle":0}],
		},
		{
			name: "Bullet Maze",
			pieceSource: [{"type":"gate","x":-100,"y":500},{"type":"bouncer","x":-250,"y":-150,"bounceAmount":1},{"type":"bouncer","x":50,"y":-250,"bounceAmount":1},{"type":"bouncer","x":300,"y":-100,"bounceAmount":1},{"type":"bouncer","x":350,"y":-250,"bounceAmount":1},{"type":"bouncer","x":200,"y":-100,"bounceAmount":1},{"type":"bouncer","x":50,"y":350,"bounceAmount":1},{"type":"bouncer","x":350,"y":0,"bounceAmount":1},{"type":"bouncer","x":0,"y":300,"bounceAmount":1},{"type":"bouncer","x":100,"y":150,"bounceAmount":1},{"type":"bouncer","x":-100,"y":-100,"bounceAmount":1},{"type":"bouncer","x":-100,"y":0,"bounceAmount":1},{"type":"bouncer","x":0,"y":200,"bounceAmount":1},{"type":"bouncer","x":-150,"y":-250,"bounceAmount":1},{"type":"bouncer","x":500,"y":-100,"bounceAmount":1},{"type":"bouncer","x":-250,"y":-50,"bounceAmount":1},{"type":"bouncer","x":250,"y":100,"bounceAmount":1},{"type":"bouncer","x":550,"y":200,"bounceAmount":1},{"type":"bouncer","x":300,"y":550,"bounceAmount":1},{"type":"bouncer","x":350,"y":400,"bounceAmount":1},{"type":"bouncer","x":-100,"y":600,"bounceAmount":1},{"type":"bouncer","x":-200,"y":400,"bounceAmount":1},{"type":"bouncer","x":500,"y":300,"bounceAmount":1},{"type":"bouncer","x":200,"y":650,"bounceAmount":1},{"type":"bouncer","x":200,"y":250,"bounceAmount":1},{"type":"bouncer","x":400,"y":150,"bounceAmount":1},{"type":"bouncer","x":550,"y":100,"bounceAmount":1},{"type":"bouncer","x":0,"y":350,"bounceAmount":1},{"type":"bouncer","x":-250,"y":50,"bounceAmount":1},{"type":"bouncer","x":100,"y":100,"bounceAmount":1},{"type":"bouncer","x":150,"y":-250,"bounceAmount":1},{"type":"bouncer","x":500,"y":0,"bounceAmount":1},{"type":"bouncer","x":250,"y":400,"bounceAmount":1},{"type":"bouncer","x":250,"y":-250,"bounceAmount":1},{"type":"bouncer","x":100,"y":650,"bounceAmount":1},{"type":"bouncer","x":150,"y":400,"bounceAmount":1},{"type":"bouncer","x":-200,"y":200,"bounceAmount":1},{"type":"bouncer","x":0,"y":-100,"bounceAmount":1},{"type":"bouncer","x":150,"y":500,"bounceAmount":1},{"type":"bouncer","x":0,"y":500,"bounceAmount":1},{"type":"bouncer","x":-200,"y":500,"bounceAmount":1},{"type":"bouncer","x":300,"y":0,"bounceAmount":1},{"type":"bouncer","x":450,"y":-150,"bounceAmount":1},{"type":"bouncer","x":350,"y":250,"bounceAmount":1},{"type":"bouncer","x":0,"y":600,"bounceAmount":1},{"type":"bouncer","x":450,"y":400,"bounceAmount":1},{"type":"bouncer","x":100,"y":-100,"bounceAmount":1},{"type":"bouncer","x":-100,"y":100,"bounceAmount":1},{"type":"bouncer","x":-200,"y":300,"bounceAmount":1},{"type":"bouncer","x":-50,"y":-250,"bounceAmount":1},{"type":"destructible","x":-50,"y":450},{"type":"destructible","x":-100,"y":400},{"type":"destructible","x":-50,"y":400},{"type":"destructible","x":-150,"y":400},{"type":"destructible","x":-150,"y":450},{"type":"destructible","x":-100,"y":450},{"type":"bullet","x":0,"y":100},{"type":"reactor","x":-100,"y":200},{"type":"blower","x":275,"y":175,"angle":0.10364257522189924}],
		},
		{
			name: "Timing",
			pieceSource: [{"type":"gate","x":100,"y":700,"xVel":0,"yVel":0},{"type":"bouncer","x":-100,"y":700,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":200,"y":-100,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":-100,"y":500,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":300,"y":0,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":300,"y":600,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":-100,"y":100,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":300,"y":200,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":-100,"y":0,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":100,"y":300,"xVel":0,"yVel":0},{"type":"barricade","x":100,"y":0,"xVel":0,"yVel":0},{"type":"barricade","x":0,"y":0,"xVel":0,"yVel":0},{"type":"barricade","x":100,"y":100,"xVel":0,"yVel":0},{"type":"bouncer","x":300,"y":300,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":-100,"y":400,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":300,"y":-100,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":300,"y":700,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":-100,"y":200,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":100,"y":200,"xVel":0,"yVel":0},{"type":"barricade","x":0,"y":100,"xVel":0,"yVel":0},{"type":"bouncer","x":-100,"y":-100,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":300,"y":100,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":0,"y":500,"xVel":0,"yVel":0},{"type":"bouncer","x":300,"y":500,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":100,"y":400,"xVel":0,"yVel":0},{"type":"barricade","x":0,"y":400,"xVel":0,"yVel":0},{"type":"bouncer","x":300,"y":400,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":100,"y":-100,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":0,"y":200,"xVel":0,"yVel":0},{"type":"barricade","x":0,"y":300,"xVel":0,"yVel":0},{"type":"bouncer","x":-100,"y":300,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":200,"y":700,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":-100,"y":600,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":0,"y":700,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":0,"y":-100,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":100,"y":500,"xVel":0,"yVel":0},{"type":"phaseBullet","x":150,"y":500,"xVel":"-500","yVel":0},{"type":"phaseBullet","x":0,"y":350,"xVel":"-500","yVel":0},{"type":"phaseBullet","x":100,"y":450,"xVel":"-500","yVel":0},{"type":"phaseBullet","x":150,"y":150,"xVel":"500","yVel":0},{"type":"phaseBullet","x":0,"y":300,"xVel":"500","yVel":0},{"type":"phaseBullet","x":50,"y":400,"xVel":"-500","yVel":0},{"type":"phaseBullet","x":50,"y":250,"xVel":"500","yVel":0},{"type":"phaseBullet","x":100,"y":200,"xVel":"500","yVel":0},{"type":"phaseBullet","x":200,"y":550,"xVel":"-500","yVel":0},{"type":"phaseBullet","x":200,"y":100,"xVel":"500","yVel":0},{"type":"reactor","x":200,"y":0,"xVel":0,"yVel":0},{"type":"blower","x":200,"y":300,"angle":-0.22531806725810677,"xVel":0,"yVel":0}],
		},
		{
			name: "Ricochet",
			pieceSource: [{"type":"gate","x":100,"y":-100,"xVel":0,"yVel":0},{"type":"barricade","x":200,"y":-200,"xVel":0,"yVel":0},{"type":"barricade","x":400,"y":-200,"xVel":0,"yVel":0},{"type":"bouncer","x":0,"y":-100,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":100,"y":400,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":200,"y":0,"xVel":0,"yVel":0},{"type":"bouncer","x":200,"y":400,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":300,"y":400,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":-200,"y":400,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":0,"y":-200,"xVel":0,"yVel":0},{"type":"barricade","x":400,"y":0,"xVel":0,"yVel":0},{"type":"bouncer","x":500,"y":400,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":100,"y":-200,"xVel":0,"yVel":0},{"type":"barricade","x":300,"y":0,"xVel":0,"yVel":0},{"type":"barricade","x":300,"y":-200,"xVel":0,"yVel":0},{"type":"bouncer","x":400,"y":400,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":0,"y":400,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":-100,"y":400,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":0,"y":0,"xVel":0,"yVel":0},{"type":"barricade","x":100,"y":0,"xVel":0,"yVel":0},{"type":"turret","x":150,"y":500,"fireDelay":"0.2","bulletSpeed":"1000","fireType":"phaseBullet","angle":-1.042721878368537,"angleFixed":false,"xVel":0,"yVel":0},{"type":"turret","x":-200,"y":-100,"fireDelay":"0.5","bulletSpeed":"500","fireType":"phaseBullet","angle":0,"angleFixed":false,"xVel":0,"yVel":0},{"type":"destructible","x":350,"y":-100,"xVel":0,"yVel":0},{"type":"destructible","x":300,"y":-100,"xVel":0,"yVel":0},{"type":"destructible","x":200,"y":-100,"xVel":0,"yVel":0},{"type":"destructible","x":250,"y":-100,"xVel":0,"yVel":0},{"type":"destructible","x":400,"y":-100,"xVel":0,"yVel":0},{"type":"reactor","x":500,"y":-100,"xVel":0,"yVel":0},{"type":"blower","x":0,"y":100,"angle":1.8008638765507978,"xVel":0,"yVel":0}],
		},
		{
			name: "Warzone",
			pieceSource: [{"type":"checkPoint","x":950,"y":-350,"xVel":0,"yVel":0},{"type":"checkPoint","x":372,"y":-529,"xVel":0,"yVel":0},{"type":"checkPoint","x":-300,"y":-100,"xVel":0,"yVel":0},{"type":"gate","x":1000,"y":600,"xVel":0,"yVel":0},{"type":"checkPoint","x":-200,"y":-650,"xVel":0,"yVel":0},{"type":"bouncer","x":1150,"y":50,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":1050,"y":50,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":-700,"y":-600,"xVel":0,"yVel":0},{"type":"bouncer","x":300,"y":-350,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":950,"y":50,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":1550,"y":950,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":350,"y":-150,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":-200,"y":-750,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":1150,"y":950,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":1550,"y":750,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":-39,"y":-186,"xVel":0,"yVel":0},{"type":"bouncer","x":450,"y":700,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":-900,"y":-800,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":450,"y":500,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":1050,"y":950,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":850,"y":50,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":50,"y":-950,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":270,"y":-645,"xVel":0,"yVel":0},{"type":"bouncer","x":497,"y":-599,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":350,"y":700,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":750,"y":-150,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":1350,"y":50,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":918,"y":-814,"xVel":0,"yVel":0},{"type":"bouncer","x":850,"y":-350,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":400,"y":100,"xVel":0,"yVel":0},{"type":"bouncer","x":-100,"y":-750,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":1550,"y":450,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":1550,"y":350,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":-50,"y":500,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":-450,"y":-550,"xVel":0,"yVel":0},{"type":"bouncer","x":150,"y":500,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":-500,"y":-973,"xVel":0,"yVel":0},{"type":"bouncer","x":-250,"y":500,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":1650,"y":50,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":-619,"y":-707,"xVel":0,"yVel":0},{"type":"bouncer","x":-250,"y":700,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":-250,"y":800,"xVel":0,"yVel":0},{"type":"bouncer","x":950,"y":950,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":50,"y":700,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":650,"y":-600,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":1250,"y":950,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":-500,"y":-627,"xVel":0,"yVel":0},{"type":"bouncer","x":250,"y":700,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":-1000,"y":-1000,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":350,"y":500,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":350,"y":250,"xVel":0,"yVel":0},{"type":"bouncer","x":-50,"y":-550,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":850,"y":-250,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":850,"y":-150,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":-250,"y":900,"xVel":0,"yVel":0},{"type":"bouncer","x":650,"y":-150,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":66,"y":-142,"xVel":0,"yVel":0},{"type":"bouncer","x":-150,"y":-350,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":850,"y":950,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":1250,"y":50,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":-750,"y":-1000,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":850,"y":1150,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":-50,"y":700,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":-50,"y":400,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":850,"y":1250,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":950,"y":-700,"xVel":0,"yVel":0},{"type":"bouncer","x":1550,"y":650,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":579,"y":-612,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":650,"y":-850,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":250,"y":100,"xVel":0,"yVel":0},{"type":"barricade","x":289,"y":393,"xVel":0,"yVel":0},{"type":"bouncer","x":546,"y":-821,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":550,"y":700,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":150,"y":700,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":400,"y":-650,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":850,"y":1050,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":-150,"y":-1000,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":-350,"y":-550,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":850,"y":1350,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":1350,"y":950,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":850,"y":250,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":-750,"y":-800,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":1450,"y":950,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":550,"y":500,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":-250,"y":600,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":-558,"y":-810,"xVel":0,"yVel":0},{"type":"bouncer","x":50,"y":-600,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":850,"y":-50,"xVel":0,"yVel":0},{"type":"barricade","x":216,"y":229,"xVel":0,"yVel":0},{"type":"bouncer","x":0,"y":-650,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":-100,"y":300,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":163,"y":-617,"xVel":0,"yVel":0},{"type":"bouncer","x":1550,"y":550,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":-50,"y":-1000,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":495,"y":-529,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":350,"y":-50,"xVel":0,"yVel":0},{"type":"bouncer","x":-1000,"y":-900,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":-900,"y":-1000,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":999,"y":-614,"xVel":0,"yVel":0},{"type":"bouncer","x":250,"y":-150,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":350,"y":-400,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":850,"y":150,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":-250,"y":1000,"xVel":0,"yVel":0},{"type":"barricade","x":-950,"y":-617,"xVel":0,"yVel":0},{"type":"bouncer","x":-1000,"y":-800,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":1550,"y":250,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":-200,"y":-850,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":1550,"y":50,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":550,"y":-150,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":-150,"y":-250,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":250,"y":-250,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":200,"y":-850,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":150,"y":-950,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"barricade","x":450,"y":387,"xVel":0,"yVel":0},{"type":"bouncer","x":250,"y":500,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":50,"y":500,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":1550,"y":850,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":450,"y":-150,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":1450,"y":50,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":-150,"y":700,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":-250,"y":-1000,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":-200,"y":500,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"bouncer","x":850,"y":1450,"bounceAmount":1,"xVel":0,"yVel":0},{"type":"turret","x":450,"y":-1000,"fireDelay":1,"bulletSpeed":1000,"fireType":"bullet","angle":3.067653615931853,"angleFixed":false,"xVel":0,"yVel":0},{"type":"turret","x":-225,"y":600,"fireDelay":1,"bulletSpeed":100,"fireType":"phaseBullet","angle":0,"angleFixed":true,"xVel":0,"yVel":0},{"type":"turret","x":681,"y":-491,"fireDelay":1,"bulletSpeed":200,"fireType":"phaseBullet","angle":-2.888445450925993,"angleFixed":false,"xVel":0,"yVel":0},{"type":"destructible","x":-620,"y":-612,"xVel":0,"yVel":0},{"type":"destructible","x":850,"y":350,"xVel":0,"yVel":0},{"type":"destructible","x":850,"y":850,"xVel":0,"yVel":0},{"type":"destructible","x":850,"y":600,"xVel":0,"yVel":0},{"type":"destructible","x":-377,"y":-695,"xVel":0,"yVel":0},{"type":"destructible","x":327,"y":161,"xVel":0,"yVel":0},{"type":"destructible","x":850,"y":500,"xVel":0,"yVel":0},{"type":"destructible","x":850,"y":900,"xVel":0,"yVel":0},{"type":"destructible","x":850,"y":800,"xVel":0,"yVel":0},{"type":"destructible","x":850,"y":650,"xVel":0,"yVel":0},{"type":"destructible","x":850,"y":300,"xVel":0,"yVel":0},{"type":"destructible","x":-800,"y":-850,"xVel":0,"yVel":0},{"type":"destructible","x":250,"y":0,"xVel":0,"yVel":0},{"type":"destructible","x":-800,"y":-950,"xVel":0,"yVel":0},{"type":"destructible","x":850,"y":550,"xVel":0,"yVel":0},{"type":"destructible","x":250,"y":300,"xVel":0,"yVel":0},{"type":"destructible","x":850,"y":450,"xVel":0,"yVel":0},{"type":"destructible","x":850,"y":400,"xVel":0,"yVel":0},{"type":"destructible","x":-529,"y":-718,"xVel":0,"yVel":0},{"type":"destructible","x":-850,"y":-950,"xVel":0,"yVel":0},{"type":"destructible","x":-850,"y":-900,"xVel":0,"yVel":0},{"type":"destructible","x":850,"y":700,"xVel":0,"yVel":0},{"type":"destructible","x":758,"y":-422,"xVel":0,"yVel":0},{"type":"destructible","x":455,"y":17,"xVel":0,"yVel":0},{"type":"destructible","x":-850,"y":-850,"xVel":0,"yVel":0},{"type":"destructible","x":-800,"y":-900,"xVel":0,"yVel":0},{"type":"destructible","x":850,"y":750,"xVel":0,"yVel":0},{"type":"mine","x":384,"y":-306,"xVel":0,"yVel":0},{"type":"mine","x":711,"y":-233,"xVel":0,"yVel":0},{"type":"mine","x":433,"y":-264,"xVel":0,"yVel":0},{"type":"mine","x":663,"y":-264,"xVel":0,"yVel":0},{"type":"mine","x":474,"y":-413,"xVel":0,"yVel":0},{"type":"mine","x":610,"y":-307,"xVel":0,"yVel":0},{"type":"mine","x":522,"y":-304,"xVel":0,"yVel":0},{"type":"mine","x":345,"y":-246,"xVel":0,"yVel":0},{"type":"mine","x":734,"y":-305,"xVel":0,"yVel":0},{"type":"mine","x":664,"y":-399,"xVel":0,"yVel":0},{"type":"mine","x":649,"y":-216,"xVel":0,"yVel":0},{"type":"mine","x":585,"y":-389,"xVel":0,"yVel":0},{"type":"mine","x":520,"y":-382,"xVel":0,"yVel":0},{"type":"mine","x":671,"y":-336,"xVel":0,"yVel":0},{"type":"mine","x":422,"y":-358,"xVel":0,"yVel":0},{"type":"mine","x":581,"y":-518,"xVel":0,"yVel":0},{"type":"mine","x":589,"y":-251,"xVel":0,"yVel":0},{"type":"mine","x":518,"y":-251,"xVel":0,"yVel":0},{"type":"mine","x":600,"y":-450,"xVel":0,"yVel":0},{"type":"phaseBullet","x":100,"y":-450,"xVel":-150,"yVel":-150},{"type":"phaseBullet","x":-308,"y":-663,"xVel":0,"yVel":0},{"type":"phaseBullet","x":-200,"y":-450,"xVel":0,"yVel":0},{"type":"phaseBullet","x":200,"y":-350,"xVel":-150,"yVel":-150},{"type":"phaseBullet","x":50,"y":-500,"xVel":150,"yVel":150},{"type":"phaseBullet","x":-200,"y":-500,"xVel":0,"yVel":0},{"type":"phaseBullet","x":328,"y":33,"xVel":0,"yVel":0},{"type":"phaseBullet","x":-300,"y":-700,"xVel":0,"yVel":0},{"type":"phaseBullet","x":367,"y":346,"xVel":0,"yVel":0},{"type":"phaseBullet","x":-739,"y":-683,"xVel":0,"yVel":0},{"type":"phaseBullet","x":162,"y":-145,"xVel":0,"yVel":0},{"type":"phaseBullet","x":-450,"y":-700,"xVel":0,"yVel":0},{"type":"phaseBullet","x":-806,"y":-649,"xVel":0,"yVel":0},{"type":"phaseBullet","x":-400,"y":-650,"xVel":0,"yVel":0},{"type":"phaseBullet","x":-150,"y":-550,"xVel":-250,"yVel":0},{"type":"phaseBullet","x":150,"y":-400,"xVel":150,"yVel":150},{"type":"phaseBullet","x":-579,"y":-649,"xVel":0,"yVel":0},{"type":"phaseBullet","x":-250,"y":-550,"xVel":250,"yVel":0},{"type":"phaseBullet","x":-822,"y":-717,"xVel":0,"yVel":0},{"type":"phaseBullet","x":469,"y":162,"xVel":0,"yVel":0},{"type":"phaseBullet","x":-825,"y":-400,"xVel":0,"yVel":-1000},{"type":"reactor","x":-900,"y":-900,"xVel":0,"yVel":0},{"type":"blower","x":-950,"y":-900,"angle":2.681886918003303,"xVel":0,"yVel":0}],
		},
		{
			background: "earthOff",
			background2: "earthOn",
			//zoom: 3,
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
