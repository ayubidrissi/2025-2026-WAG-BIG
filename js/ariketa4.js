var liburuak = [ "Liburu 1", "Liburu 2", "piter pan" ];
var tituluak = [ "Titulua 1", "Titulua 2", "peter pan" ];
var autoreak = [ "Egilea 1", "Egilea 2", "J.M BARRIE " ];
var irakurrita = [ false, false, true ];

for (var i = 0; i < liburuak.length; i++) {
    if (irakurrita[i] == true) {
        alert( tituluak[i] +" liburu hau irakurrita daukazu " )
    } else {
        alert( tituluak[i] + " liburu hau ez daukazu irakurrita " )
    }
}




