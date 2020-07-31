function fizzBuzz(number) {
    if (typeof number === 'number') {
        let div5 = number % 5 === 0;
        let div3 = number % 3 === 0;

        if (div5 && div3) return "FizzBuzz";
        if (div5) return "Fizz";
        if (div3) return "Buzz";

        return number;

    }

    return "Não é um número!";
}