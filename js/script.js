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
const percorrenza = 10; //prompt
const etàPasseggero = 27; //prompt
    console.log('Km da percorrere:', percorrenza);
    console.log('Età del passeggero:', etàPasseggero);

// Prezzo base
let costoDistanza = percorrenza * 0.21;
    console.log('Costo base:', costoDistanza, '€');




    
/*
// Sconti possibili
const scontoGiovani = costoDistanza - ((costoDistanza / 5) * 4);
    console.log('Sconto giovani se applicabile:', scontoGiovani, '€');

const scontoAnziani = costoDistanza * 100 / 40;
    console.log('Sconto anziani se applicabile:', scontoAnziani, '€');
*/

/*
// Applicabilità degli sconti
if(etàPasseggero > 18){
    let costoFinale = costoDistanza - scontoGiovani;
} else {
    let costoFinale = costoFinale;
};
    console.log('Costo finale:', costoFinale, '€');

if(etàPasseggero > 65){
    let costoFinale = costoDistanza - scontoAnziani;
} else {
    let costoFinale = costoFinale;
};
    console.log('Costo finale:', costoFinale, '€');
*/