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
const percorrenza = 31; //prompt
const etàPasseggero = 7; //prompt
    console.log('Km da percorrere:', percorrenza);
    console.log('Età del passeggero:', etàPasseggero);

// Prezzo base
let costoDistanza = percorrenza * 0.21;
    console.log('Costo base:', costoDistanza, '€');
let costoFinale = costoDistanza;

// Sconti applicabili
let scontoGiovani = costoDistanza * 0.20;
    console.log('Sconto giovani se applicabile:', scontoGiovani, '€');
let scontoAnziani = costoDistanza * 0.40;
    console.log('Sconto anziani se applicabile:', scontoAnziani, '€');

// Prezzo finale
if(etàPasseggero < 18){
    let costoFinale = costoDistanza - scontoGiovani;
    console.log("costo giovani", costoFinale);
} else if(etàPasseggero > 65){
    let costoFinale = costoDistanza - scontoAnziani;
    console.log("costo vecchi", costoFinale);
} else{
    let costoFinale = costoDistanza;
    console.log("costo altri", costoFinale);
}

// Arrotondamento
let daPagare = Math.round(costoFinale * 100) / 100;
    console.log("da pagare", daPagare);

// Stampa
// document.getElementById(cost).innerHTML = daPagare;