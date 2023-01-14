function insertionSort(lista){
	for(let i=1; i < lista.length; i++){
		let key = lista[i]
		let j = i-1
		while(j >= 0 && lista[j] > key){
			lista[j+1] = lista[j]
			j = j-1
		}
		lista[j+1] = key
	}
}