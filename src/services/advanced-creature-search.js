const stringCompare = (a, b) => {
    a = a.trim().toLowerCase();
    b = b.trim().toLowerCase();
    return a.includes(b);
};

const parseCrToInt = str => {
    switch (str) {
        case "1/8":
            return 0.125;
        case "1/4":
            return 0.25;
        case "1/2":
            return 0.5;
        default:
            return parseInt(str);
    }
};

const isBetween = (a, b, c) => {
    a = parseCrToInt(a);
    b = parseCrToInt(b);
    c = parseCrToInt(c);

    return a >= b && a <= c;
};

const isBelowOrEqual = (a, b) => {
    a = parseCrToInt(a);
    b = parseCrToInt(b);

    return a <= b;
};

const isMoreOrEqual = (a, b) => {
    a = parseCrToInt(a);
    b = parseCrToInt(b);

    return a >= b;
};

const advancedCreatureSearch = (creatures, options) => {
    if (
        !options.name &&
        !options.type &&
        !options.alignment &&
        !options.minCr &&
        !options.maxCr
    ) {
        return creatures;
    }

    return creatures.filter(item => {
        let isValid = true;

        if (options.name && options.name.length > 0) {
            if (!stringCompare(item.name, options.name)) {
                isValid = false;
            }
        }

        if (options.type && options.type.length > 0) {
            if (!stringCompare(item.type, options.type)) {
                isValid = false;
            }
        }

        if (options.minCr && !options.maxCr) {
            if (!isMoreOrEqual(item.challenge, options.minCr)) {
                isValid = false;
            }
        }

        if (!options.minCr && options.maxCr) {
            if (!isBelowOrEqual(item.challenge, options.maxCr)) {
                isValid = false;
            }
        }

        if (options.minCr && options.maxCr) {
            if (!isBetween(item.challenge, options.minCr, options.maxCr)) {
                isValid = false;
            }
        }

        if (options.alignment && options.alignment.length > 0) {
            if (item.alignment != options.alignment) {
                isValid = false;
            }
        }

        return isValid;
    });
};

export { advancedCreatureSearch };
