const country = "India, Pakistan, Nepal,  Bangladesh, Maldives, Australia";

const result = country.match(/[aeiou]/gi).length;

console.log("in country string the vowels are:", result);
