module.exports = function toReadable(number) {
    function from1To9(number) {
        if (number === 1) {
            return "one";
        }
        if (number === 2) {
            return "two";
        }
        if (number === 3) {
            return "three";
        }
        if (number === 4) {
            return "four";
        }
        if (number === 5) {
            return "five";
        }
        if (number === 6) {
            return "six";
        }
        if (number === 7) {
            return "seven";
        }
        if (number === 8) {
            return "eight";
        }
        if (number === 9) {
            return "nine";
        }
        return "";
    }

    function from11To99(number) {
        if (number === 10) {
            return "ten";
        }
        if (number === 11) {
            return "eleven";
        }
        if (number === 12) {
            return "twelve";
        }
        if (number === 13) {
            return "thirteen";
        }
        if (number === 14) {
            return "fourteen";
        }
        if (number === 15) {
            return "fifteen";
        }
        if (number === 16) {
            return "sixteen";
        }
        if (number === 17) {
            return "seventeen";
        }
        if (number === 18) {
            return "eighteen";
        }
        if (number === 19) {
            return "nineteen";
        }
        if (String(number)[0] === "2") {
            return `twenty ${from1To9(+String(number)[1])}`;
        }
        if (String(number)[0] === "3") {
            return `thirty ${from1To9(+String(number)[1])}`;
        }
        if (String(number)[0] === "4") {
            return `forty ${from1To9(+String(number)[1])}`;
        }
        if (String(number)[0] === "5") {
            return `fifty ${from1To9(+String(number)[1])}`;
        }
        if (String(number)[0] === "6") {
            return `sixty ${from1To9(+String(number)[1])}`;
        }
        if (String(number)[0] === "7") {
            return `seventy ${from1To9(+String(number)[1])}`;
        }
        if (String(number)[0] === "8") {
            return `eighty ${from1To9(+String(number)[1])}`;
        }
        if (String(number)[0] === "9") {
            return `ninety ${from1To9(+String(number)[1])}`;
        }
        return "";
    }

    function from100To999(number) {
        if (+String(number)[1] === 0) {
            return `${from1To9(+String(number)[0])} hundred ${from1To9(
                +String(number)[2]
            )}`;
        }

        return `${from1To9(+String(number)[0])} hundred ${from11To99(
            +(String(number)[1] + String(number)[2])
        )}`;
    }

    return (
        number === 0
            ? "zero"
            : String(number).length === 1
            ? from1To9(number)
            : String(number).length === 2
            ? from11To99(number)
            : String(number).length === 3
            ? from100To999(number)
            : "the function works in the range 0-999"
    ).trim();
};
