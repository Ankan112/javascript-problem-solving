const country = "India, Pakistan, Nepal, Srilanka, Bangladesh";

const result = country.match(/[aeiou]/gi).length;

console.log("in country string the vowels are:", result);
