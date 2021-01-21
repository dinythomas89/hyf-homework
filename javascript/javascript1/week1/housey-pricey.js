const peterHousevolume = 8 * 10 * 10;
const juliaHouseVolume = 5 * 11 * 8;
const peterGardenSize = 100;
const juliaGardenSize = 70;
const peterHousePrice = peterHousevolume * 2.5 * 1000 + peterGardenSize * 300;
const juliaHousePrice = juliaHouseVolume * 2.5 * 1000 + juliaGardenSize * 300;

console.log((peterHousePrice < 2500000) === true ? 'Peter is paying more' : 'peter is paying less');
console.log((juliaHousePrice < 1000000) === true ? 'Julia is paying more' : 'Julia is paying less');