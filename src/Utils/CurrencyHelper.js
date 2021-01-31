export function getCurrencyName(cName) {
    switch (cName) {
        case "hkd":
            return "HKD ";
            break;

        default :
            return "HKD ";
    }
}

export function getCurrencyPrice(cName, price) {
    switch (cName) {
        case "hkd":
            return price;
            break;

        default :
            return price;
    }
}


