function getShippingCost(country) {
    const China = '100 credits';
    const Chile = '250 credits';
    const Australia = '170 credits';
    const Jamaica = '120 credits';
    const lowerCaseCountry = country.toLowerCase();
    switch (lowerCaseCountry) {
        case 'china':
            return `Shipping to China will cost ${China}`;
            break;
        case 'chile':
            return `Shipping to Chile will cost ${Chile}`;
            break;
        case 'australia':
            return `Shipping to Australia will cost ${Australia}`;
            break;
        case 'jamaica':
            return `Shipping to Jamaica will cost ${Jamaica}`;
            break;
        default:
            return `Sorry, there is no delivery to your country`
    }

}


console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"