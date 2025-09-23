zenbaki1 = prompt("sartu zenbaki eta faktoriala kalkulatuko da ")
zenbaki1 = parseInt(zenbaki1)
if (isNaN(zenbaki1) || zenbaki1 < 0) {
    alert("sartu zenbaki bat")
}
faktoriala = 1
for (let i = 1; i <= zenbaki1; i++) {
    faktoriala = faktoriala * i
}
alert( faktoriala)

