function stopEvent(ev) {
	ev.stopPropagation();
}

class Editor{
	constructor(sim){
		this.sim = sim;
		this.typeSelected = "reactor";
		this.piecesSelected = []
		this.snapInt = 50;
		this.active = false;
		this.data = null;
		this.planAttrs = {
			type: "string",
			x: "num",
			y: "num",
			text: "string",
			fireDelay: "num",
			bulletSpeed: "num",
			bounceAmount: "num",
			fireType: "string",
			angle: "num",
			angleFixed: "string",
			xVel: "num",
			yVel: "num"
		};
	}
	open(){
		this.sim.pieceList = [];
		this.sim.makePieceListFromSource(levelPlan.pieceSource, levelPlan.boundaryMargin)
		this.hideData();
		this.active = true;
		Rules.gameSpeed = 0;
		this.renderPanel();
		this.initControls();
		$(document).off(".controls")
		console.log("u opend da thange!")
	}
	close(){
		levelPlan.pieceSource = this.renderData();
		levelPlan.boundaryMargin = this.sim.boundary.margin;
		this.active = false
		Rules.gameSpeed = Rules.runningGameSpeed;
		$("#editorPanel").hide()
		initControls(this.sim);
		$(document).off(".editorControls")
		console.log("u closs da thange!")
		this.piecesSelected = [];
	}
	snap(x, y){
		x /= this.snapInt;
		y /= this.snapInt;
		x = Math.round(x)
		y = Math.round(y)
		x *= this.snapInt;
		y *= this.snapInt;
		return [x, y]
	}
	click(x, y, shifted){
		let list = this.sim.pieceList.sort((a, b)=>{
			return calcDist(a.x, a.y, x, y)-calcDist(b.x, b.y, x, y)
		});
		let piece = list[0];
		if(calcDist(piece.x, piece.y, x, y) < (piece.hitBoxRadius ? piece.hitBoxRadius : piece.hitBoxSize/2)){
			if(shifted){
				this.piecesSelected.push(piece);
				this.renderPanel()
			}else{
				this.deselect(true)
				this.piecesSelected.push(piece);
				this.renderPanel()
			}
		}else{
			let piece = this.place(x, y)
			this.deselect(true)
			this.piecesSelected.push(piece);
		}
		this.renderPanel()
	}
	deselect(param1){
		if(param1 === true){
			this.piecesSelected = [];
		}
		this.renderPanel()
	}

	setType(type){
		this.typeSelected = type;
		this.renderPanel()
	}
	renderData(){
		let pieceList = this.sim.pieceList;
		let data = [];
		for (let i in pieceList){
			let piece = pieceList[i];
			if(piece.isParticle){continue}
			let temp = {};
			for (let attr in this.planAttrs){
				if(piece[attr] !== undefined){
					temp[attr] = piece[attr];
				}
			}
			data.push(temp);
		}
		return data;
	}
	showData(){
		$("#levelData").html(JSON.stringify(this.renderData()));
		$("#showDataButton").hide();
		$("#hideDataButton").show();
		$("#levelData").show();
	}
	hideData(){
		$("#showDataButton").show();
		$("#hideDataButton").hide();
		$("#levelData").hide();
	}
	initControls(){
		let mouseX = 0;
		let mouseY = 0;
		let dragStartX = 0;
		let dragStartY = 0;
		let blower = this.sim.blower;
		let scope = this;

		$("#showDataButton").on("click.editorControls", null, ()=>this.saveLevel());
		$("#hideDataButton").on("click.editorControls", null, ()=>this.hideData());

		$("#editorPanel").on("keyup.editorControls", null, (event)=>{
			stopEvent(event);
		});
		$("#editorPanel").on("click.editorControls", null, (event)=>{
			stopEvent(event);
		});
		$("#editorPanel").on("mousedown.editorControls", null, (event)=>{
			stopEvent(event);
		});
		$("#editorPanel").on("mouseup.editorControls", null, (event)=>{
			stopEvent(event);
		});
		$( document ).on("mousemove.editorControls", null, function( event ) {
			mouseX = event.pageX+blower.x-canvasWidth/2;
			mouseY = event.pageY+blower.y-canvasHeight/2;
		});
		$( document ).on("click.editorControls", null, function( event ) {
			if(dragStartX == mouseX && dragStartY == mouseY){
				this.click(mouseX, mouseY, event.shiftKey)
			}
		}.bind(scope));
		$( document ).on("mousedown.editorControls", null, function( event ) {
			dragStartX = mouseX;
			dragStartY = mouseY;
		}.bind(scope));
		$( document ).on("mouseup.editorControls", null, function( event ) {
			for (var i = 0; i < this.piecesSelected.length; i++) {
				let piece = this.piecesSelected[i];
				piece.x += mouseX-dragStartX;
				piece.y += mouseY-dragStartY;
				if(event.shiftKey){
					[piece.x, piece.y] = this.snap(piece.x, piece.y);
				}
			}
			this.sim.boundary.resize()
		}.bind(scope));
		$( document ).on("keyup.editorControls", null, function( event ) {
			if(event.key == "Backspace"){
				this.delete();
			}
			if(event.key == "d" || event.key == "D"){
				this.deselect(true);
			}
			if( event.key == 'e' || event.key == 'E') {
				this.close()
			}
			if(event.key == "0"){
				this.setType("blower")
			}
			if(event.key == "1"){
				this.setType("reactor");
			}
			if(event.key == "!"){
				this.setType("receptical");
			}
			if(event.key == "2"){
				this.setType("checkPoint");
			}
			if(event.key == "@"){
				this.setType("gate");
			}
			if(event.key == "3"){
				this.setType("mine");
			}
			if(event.key == "4"){
				this.setType("barricade");
			}
			if(event.key == "5"){
				this.setType("bouncer");
			}
			if(event.key == "6"){
				this.setType("destructible");
			}
			if(event.key == "7"){
				this.setType("turret");
			}
			if(event.key == "8"){
				this.setType("bullet");
			}
			if(event.key == "9"){
				this.setType("phaseBullet");
			}
		}.bind(scope))
	}
	isSelected(piece){
		return this.piecesSelected.find((pieceFound)=>{return pieceFound === piece})
	}
	renderPanel(){
		$("#placingType").html(this.typeSelected)

		$("#attributeBoxes").empty()
		let piece = this.piecesSelected[0];
		
		let margin = this.sim.boundary.margin;
		let span = $('<span>Boundary Margin: </span>');
		let input = $('<input type="text" id="nameInput"/>').appendTo(span).val(margin);

		let self = this;

		function setMarginFromInput(){
			let val = $(input).val();
			let margin = parseInt(val)

			if(isNaN(margin)){
				margin = 0;
				$(input).val(margin);
			}

			self.sim.boundary.setMargin(margin)
		}
		
		input.on("keypress.editorGroup", null, function(event){
			if(event.key == "Enter"){
				setMarginFromInput()
			}
		});
		input.on("blur.editorGroup", null, function(event){
			setMarginFromInput()
		});


		span.appendTo("#attributeBoxes");

		for (let attr in piece){
			let a = this.planAttrs[attr];
			if(a && attr != "type"){
				let span = $('<span>'+attr+': </span>');
				let input = $('<input type="text" id="nameInput"></input>').appendTo(span);
				let n = ( typeof a !== 'function' ? piece[attr] : a(piece[attr]) );
				input.val(n);
				input.on("keypress.editorGroup", null, function(event){
					let val = $(this, "input").val();
					if( a === "num"){
						val = parseInt(val);
					}
					piece[attr] = val;
					this.sim.boundary.resize()
				});
				span.appendTo("#attributeBoxes");
			}
		}
		$("#editorPanel").show()
	}
	saveLevel(){
		let payload = {
			levelName: levelPlan.name,
			pieceList: this.renderData(),
		}
		console.log(payload)
		internet.ajax({
			url: '/rrpack',
			method: 'POST',
			contentType:"application/json; charset=utf-8",
			data: JSON.stringify(payload)
		}, ()=>{});
	}
	place(x, y){
		x = this.snap(x, y)[0]
		y = this.snap(x, y)[1]

		let defaultObject = {text: "text", fireDelay: 1, bulletSpeed: 100, bounceAmount: 1, angle: 0, angleFixed: false, xVel: 0, yVel: 0};

		let piece = this.sim.addPiece(x, y, this.typeSelected, defaultObject);

		return this.sim.addPiece(x, y, this.typeSelected, defaultObject);
	}
	delete(){
		for (var i = 0; i < this.sim.pieceList.length;) {
			if(this.isSelected(this.sim.pieceList[i])){
				this.sim.pieceList.splice(i, 1)
			}else{
				i++
			}
		}
		this.piecesSelected = []
		this.renderPanel()
	}
}