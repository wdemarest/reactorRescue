function stopEvent(ev) {
	ev.stopPropagation();
}

class Editor{
	constructor(sim){
		this.sim = sim;
		this.typeSelected = "reactor";
		this.piecesSelected = []
		this.snapInt = 25;
		this.active = false;
		this.planAttrs = {type: true, x: true, y: true, text: true, fireDelay: true, bulletSpeed: true, bounceAmount: true}
	}
	open(){
		this.hideData();
		this.active = true;
		Rules.gameSpeed = 0;
		this.renderPanel();
		this.initControls();
		$(document).off(".controls")
		console.log("u opend da thange!")
	}
	close(){
		this.active = false
		Rules.gameSpeed = Rules.runningGameSpeed;
		$("#editorPanel").hide()
		initControls(this.sim);
		$(document).off(".editorControls")
		console.log("u closs da thange!")
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
	click(x, y){
		let list = this.sim.pieceList.sort((a, b)=>{
			return calcDist(a.x, a.y, x, y)-calcDist(b.x, b.y, x, y)
		});
		let piece = list[0];
		if(calcDist(piece.x, piece.y, x, y) < (piece.hitBoxRadius ? piece.hitBoxRadius : piece.width)){
			this.piecesSelected.push(piece);
			this.renderPanel()
		}else{
			this.place(x, y)
		}
	}
	deselect(param1, param2){
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
		$("#levelData").html(JSON.stringify(data));
	}
	showData(){
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
		let blower = this.sim.blower;
		let scope = this;

		$("#showDataButton").on("click.editorControls", null, ()=>this.showData());
		$("#hideDataButton").on("click.editorControls", null, ()=>this.hideData());

		$("#editorPanel").on("keypress.editorControls", null, stopEvent);
		$("#editorPanel").on("click.editorControls", null, (event)=>{
			console.log("we has click");
			stopEvent(event);
		});

		$( document ).on("mousemove.editorControls", null, function( event ) {
			mouseX = event.pageX+blower.x-canvasWidth/2;
			mouseY = event.pageY+blower.y-canvasHeight/2;
		});
		$( document ).on("click.editorControls", null, function( event ) {
			this.click(mouseX, mouseY)
		}.bind(scope));
		$( document ).on("keyup.editorControls", null, function( event ) {
			if(event.key == "Backspace"){
				this.delete();
			}
			if(event.key == "d" || event.key == "D"){
				this.deselect(true);
			}
			if(event.key == "0"){
				this.setType("text")
			}
			if(event.key == "1"){
				this.setType("reactor");
			}
			if(event.key == "2"){
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
				this.setType("blower");
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
		for (let attr in piece){
			if(this.planAttrs[attr] && attr != "type"){
				let span = $('<span>'+attr+': </span>');
				let input = $('<input type="text" id="nameInput"></input>').appendTo(span);
				input.val(piece[attr]);
				input.on("keypress.editorGroup", null, function(event){
					if(event.key == "Enter"){
						piece[attr] = $(this, "input").val();
					}
				});
				span.appendTo("#attributeBoxes");
			}
		}
		this.renderData();
		$("#editorPanel").show()
	}
	chooseType(typeNum){
		this.typeSelected = typeList[typeNum];
	}
	place(x, y){
		x = this.snap(x, y)[0]
		y = this.snap(x, y)[1]

		EditLevel(this.sim, levelPlan, this.typeSelected, x, y, {text: "text", fireDelay: 1, bulletSpeed: 100, bounceAmount: 1})
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