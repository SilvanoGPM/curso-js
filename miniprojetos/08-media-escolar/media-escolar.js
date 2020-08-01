function mediaDoAluno(array) {
    const media = calcMedia(array);
    console.log("Média: " + media);

    if (media <= 59) return "F";
    if (media <= 69) return "D";
    if (media <= 79) return "C";
    if (media <= 89) return "B";

    return "A";

}

function calcMedia(array) {
    let soma = 0;

    for (let nota of array) {
        soma += nota;
    }

    return Math.floor(soma / array.length);
}

const ARRAY = [80, 70, 70]
console.log(mediaDoAluno(ARRAY));