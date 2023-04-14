function selectionSort(lista){
	for(let i=0; i < lista.length-1; i++){
		let minIndex = i;
		for(let j=i+1; j < lista.length; j++){
			if (lista[j] < lista[minIndex]){
				minIndex = j;
			}
		}
		listHistory.push([lista.slice(), i, minIndex])
		if (minIndex !== i){
			[lista[i], lista[minIndex]] = [lista[minIndex], lista[i]];
		}
		
	}
}

function setup() {
	pixelDensity(2);
	createCanvas(420, 600)
	background(255, 255, 255)
	noLoop()	
}

function draw() {
	fill(0, 10, 0);
	textSize(48);
	textFont('Sans-serif');
	text('Selection sort', 50, 80);
	let x = 0
	let rectHeights = 0
	if (historyIndex < listHistory.length){
		rectHeights = listHistory[historyIndex]
	} else{
		rectHeights = listHistory[listHistory.length - 1]
	}
	let counter = 0;
	for (rectHeight of rectHeights[0]){
		let rectWidth = 420/rectHeights[0].length
		noStroke()
		if (rectHeights[1] == counter || rectHeights[2] == counter){
			fill(200, 0, 0)
			if (historyIndex < listHistory.length){
				pulse.amp(0.5);
				pulse.freq(rectHeight*5);
				pulse.width(0.5);
				pulse.start()
			}
		}else{
			fill(0, 0, 0)
		}
		counter += 1;
		
		rect(x, 600, rectWidth, -rectHeight)
		x = x + rectWidth;
	}
	pulse.amp(0, 0.2);
}

function drawNextListOfListHistory() {
	historyIndex += 1
	clear()
	redraw()
}

let randomHeights = Array.from({length: 105}, () => Math.floor(Math.random() * 500))
let listHistory = []
let historyIndex = 0
selectionSort(randomHeights)

console.log(listHistory[listHistory.length-1]);

pulse = new p5.Pulse();

function mousePressed() {
	setInterval(drawNextListOfListHistory, 200);
	userStartAudio();
}