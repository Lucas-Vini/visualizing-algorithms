function insertionSort(lista){
	for (let i = 1; i < lista.length; i++){
		key = lista[i]
		j = i-1
		while (j >= 0 && lista[j] > key){
			lista[j+1] = lista[j]
			j = j - 1
			lista[j+1] = key
			listHistory.push(lista.slice())
		}
		listHistory.push(lista.slice())

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
	text('Insertion sort', 50, 80);
	let x = 0
	let rectColors = 0
	if (historyIndex < listHistory.length){
		rectColors = listHistory[historyIndex]
	} else{
		rectColors = listHistory[listHistory.length - 1]
	}
	for (rectColor of rectColors){
		let rectWidth = 420/rectColors.length
		noStroke()
		fill(0, rectColor, 255)
		rect(x, 100, rectWidth, window.innerHeight-200)
		x = x + rectWidth
	}
}

function drawNextListOfListHistory() {
	historyIndex += 1
	redraw()
}

let randomColors = Array.from({length: 35}, () => Math.floor(Math.random() * 255))
let listHistory = []
let historyIndex = 0
insertionSort(randomColors)

setInterval(drawNextListOfListHistory, 500);