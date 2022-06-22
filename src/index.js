module.exports = function toReadable(number) {
    const unitsAlias = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tensAlias = [
        "empty",
        "empty",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    function get0too99(num) {
        if (num <= 19) return unitsAlias[num];
        if (String(num).length == 2 && num > 19) {
            let result = tensAlias[String(num)[0]];
            if (String(num)[1] != 0)
                result = `${result} ${unitsAlias[String(num)[1]]}`;
            return result;
        }
    }

    function get99to999(num) {
        let h = Number(String(number)[0]);
        let tu = Number(String(number).slice(1, 3));
        if (tu != 0) return `${unitsAlias[h]} hundred ${get0too99(tu)}`;
        return `${unitsAlias[h]} hundred`;
    }

    if (number <= 99) return get0too99(number);
    if (number > 99 && number <= 999) return get99to999(number);
};
