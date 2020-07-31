let hora = 19;

// If Else
if (hora >= 6 && hora <= 12) {
    console.log("Bom dia!");
} else if (hora <= 17) {
    console.log("Bom tarde!");
} else {
    console.log("Boa noite!");
}

// Switch Case

let desconto = 4;

switch (desconto) {
    case 1:
        console.log("10% de desconto");
        break;
    case 2:
        console.log("20% de desconto");
        break;
    case 3:
        console.log("30% de desconto");
        break;
    default: console.log("Não tem desconto com esse código!")
}