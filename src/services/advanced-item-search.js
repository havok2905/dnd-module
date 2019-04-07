const stringCompare = (a, b) => {
    a = a.trim().toLowerCase();
    b = b.trim().toLowerCase();
    return a.includes(b);
};
const advancedItemSearch = (items, options) => {
    if (!options.name) {
        return items;
    }

    return items.filter(item => {
        let isValid = true;

        if (options.name && options.name.length > 0) {
            if (!stringCompare(item.name, options.name)) {
                isValid = false;
            }
        }

        return isValid;
    });
};

export { advancedItemSearch };
