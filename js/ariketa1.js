
    let nota1 = prompt("idatzi hiru nota");
    let nota2 = prompt("idatzi bigarren nota");
    let nota3 = prompt("idatzi hirugarren nota");
    let batazbestekoa = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
    if (batazbestekoa >= 5) {
        alert("Zorionak, gainditu duzu:  " + batazbestekoa);
    } else {
        alert("Ezin duzu ikasturtea gainditu:  " + batazbestekoa);
    }
    
    
    
