"use strict";

const tablero = document.querySelector(".tablero");
const start = document.querySelector(".nuevoJuego");
const areaTarjeta = document.querySelector(".area_tarjeta");
const trasera = document.querySelector(".trasera");
const tarjeta = document.querySelector(".tarjeta");
const winner = document.querySelector(".winner");

let counter = 0;
gerenerateBoard();

function generateIcons() {
	let icons = [
		`<i class="fa-solid fa-pizza-slice"></i>`,
		`<i class="fa-solid fa-lemon"></i>`,
		`<i class="fa-solid fa-carrot"></i>`,
		`<i class="fa-solid fa-hotdog"></i>`,
		`<i class="fa-solid fa-ice-cream"></i>`,
		`<i class="fa-solid fa-pepper-hot"></i>`,
		`<i class="fa-solid fa-shrimp"></i>`,
		`<i class="fa-solid fa-burger"></i>`,
		`<i class="fa-solid fa-egg"></i>`,
		`<i class="fa-solid fa-cheese"></i>`,
		`<i class="fa-solid fa-cookie"></i>`,
		`<i class="fa-solid fa-apple-whole"></i>`,
	];
	return icons;
}

function gerenerateBoard() {
	let array = generateIcons();

	let tarjetas = [];
	for (let i = 0; i < 18; i++) {
		tarjetas.push(`<div class="area_tarjeta" onclick='selectCard(${i})'>
    <div class="tarjeta" id='tarjeta${i}'>
        <div class="cara trasera" id='trasera${i}'>${array[0]}</div>
        <div class="cara superior"><i class="fa-solid fa-circle-question"></i></div>
    </div></div>`);
		if (i % 2 === 1) {
			array.splice(0, 1);
		}
	}

	tarjetas.sort(() => Math.random() - 0.5);
	tablero.innerHTML = tarjetas.join("");
    winner.innerHTML = ` `;
}
let selections = [];

function selectCard(i) {
	let tarjeta = document.getElementById("tarjeta" + i);
	if (tarjeta.style.transform != "rotateY(180deg)") {
		tarjeta.style.transform = "rotateY(180deg)";
		selections.push(i);
	}
	if (selections.length === 2) {
		deselect(selections);
		selections = [];
	}
}

function deselect(selections) {
	setTimeout(() => {
		let trasera1 = document.getElementById("trasera" + selections[0]);
		let trasera2 = document.getElementById("trasera" + selections[1]);
		if (trasera1.innerHTML !== trasera2.innerHTML) {
			let card1 = document.getElementById("tarjeta" + selections[0]);
			let card2 = document.getElementById("tarjeta" + selections[1]);
			card1.style.transform = "rotate(0deg)";
			card2.style.transform = "rotate(0deg)";
		} else {
			trasera1.style.background = "#F96E46";
			trasera2.style.background = "#F96E46";
			counter++;
			counter++;
			console.log(counter);
		}
		if (counter == 18) {
			winner.innerHTML = `You win!`;
		}
	}, 1000);
}
function winGame() {}
winGame();
start.addEventListener("click", gerenerateBoard);
