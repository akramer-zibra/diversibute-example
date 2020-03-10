// Bibliothek laden
var diversibute = require('diversibute')

/*
 * Gesammelte Merkmale von Teilnehmenden
 *
 * Die Merkmale besitzen keine Titel, hie rist die Reihenfolge entscheidend.
 * Es können Dezimalwerte zwischen 0 und 10 angegeben werden.
 */
var teilnehmende = {
  A: [1.6, 0, 2.4],
  B: [8.6, 1.3, 6.2],
  C: [6.6, 1.2, 2.3],
  D: [6.6, 3.6, 0],
  E: [8.7, 4.1, 8.3],
  F: [1.2, 4.1, 1.4],
  G: [0, 1.2, 1.5],
  H: [2.7, 3.6, 5],
  I: [1.6, 7.8, 5.8],
  J: [1.2, 3.7, 0],
  K: [7.9, 0, 1.6],
  L: [9, 2.9, 0],
  M: [3.2, 7.4, 5.5],
  N: [7.3, 1.2, 8.7],
  O: [1.4, 7.8, 7.7],
  P: [1.5, 1, 1.2],
  Q: [8.1, 0, 2.6],
  R: [9.2, 0, 0],
  S: [6.4, 1.3, 0],
  T: [9.8, 6.8, 7.7],
  U: [1.8, 1.4, 6.9],
  V: [0, 3.0, 1.8],
  W: [7.3, 2.7, 0],
  X: [1.2, 9.4, 4.7],
  Y: [4.7, 4.8, 8.6],
  Z: [3.3, 0, 7.3]
}

// Algorithmus anwenden
diversibute.diverse(teilnehmende, 4, { results: 5 }).then(result => {
  // Ausgabe des gesamten Ergebnisses
  console.log('\n>>> Gesamtes Ergebnisobjekt:')
  console.log(result)

  // Ausgabe des besten Ergebnisses
  console.log('\n>>> Bestes Ergebnis:')
  console.log(result.results[0])
})
