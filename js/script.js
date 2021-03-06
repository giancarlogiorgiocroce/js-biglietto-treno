/*
Chiedere km da percorrere.
Chiedere età.
Calcola prezzo in base a distanza.
Calcola sconto minorenni (se applicabile).
Calcola sconto anziani (se applicabile).
Produci l'autput con due decimali.
*/
    console.log('hello world');

// Dati da richiedere all'utente
const percorrenza = prompt("Perfavore inserisci la quantità di km in numeri");
const etàPasseggero = prompt("Perfavore inserisci la tua età in numeri");

document.getElementById('output-percorrenza').innerHTML += `${percorrenza} km`;
document.getElementById('output-età').innerHTML += etàPasseggero;

// Prezzo base
let costoDistanza = percorrenza * 0.21;
let costoFinale = costoDistanza;

// Sconti applicabili
let scontoGiovani = costoDistanza * 0.20;
    console.log('Sconto giovani se applicabile:', scontoGiovani, '€');
let scontoAnziani = costoDistanza * 0.40;
    console.log('Sconto anziani se applicabile:', scontoAnziani, '€');

// Prezzo finale
if(etàPasseggero < 18){
    let costoFinale = costoDistanza - scontoGiovani;
    let costoFinaleArrotondato = Math.round(costoFinale * 100) / 100;
    document.getElementById('outputPrezzo').innerHTML += `${costoFinaleArrotondato} €`;
} else if(etàPasseggero > 65){
    let costoFinale = costoDistanza - scontoAnziani;
    let costoFinaleArrotondato = Math.round(costoFinale * 100) / 100;
    document.getElementById('outputPrezzo').innerHTML += `${costoFinaleArrotondato} €`;
} else{
    let costoFinale = costoDistanza;
    let costoFinaleArrotondato = Math.round(costoFinale * 100) / 100;
    document.getElementById('outputPrezzo').innerHTML += `${costoFinaleArrotondato} €`;
}