const boton = document.querySelector('button');
const texto = document.getElementById('texto')
    
console.log(boton)
console.log(texto)

function generarColorHexAleatorio(){
	
	let digitos = '0123456789ABCDEF';
	let colorHex = '#';


	for(i=0;i<6;i++){
		let indiceAleatorio = Math.floor(Math.random() * 16)
		colorHex += digitos[indiceAleatorio];
		}	
return colorHex;
}



function cambiarColor(){

	let colorAleatorio = generarColorHexAleatorio();

	texto.textContent = colorAleatorio;
	document.body.style.backgroundColor = colorAleatorio;
}

boton.addEventListener('click',cambiarColor)






