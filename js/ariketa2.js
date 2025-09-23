let pasahitza, pasahitza2;

do {
    pasahitza = prompt("Sartu pasahitza:");
    pasahitza2 = prompt("Sartu pasahitza berriro:");
    if (pasahitza == pasahitza2) {
        alert("Ongi etorri");
    } else {
        alert("Pasahitza okerra da");
    }
} while (pasahitza != pasahitza2);

