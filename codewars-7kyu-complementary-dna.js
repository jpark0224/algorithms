// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna) {
  //your code here

  let result = "";

  for (const letter of dna) {
    if (letter === "A") {
      result += "T";
      console.log(result);
    } else if (letter === "T") {
      result += "A";
      console.log(result);
    } else if (letter === "C") {
      result += "G";
      console.log(result);
    } else if (letter === "G") {
      result += "C";
      console.log(result);
    } else return;
  }
  return result;
}

console.log(DNAStrand("ATTGC"));
