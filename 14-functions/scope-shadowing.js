// an example of scope shadowing
// this can cause a variables value to be overriden
// due to having a different valueled variable in a different scope.

var bookTitle = "Le Petit Prince";
console.log(bookTitle); // Le Petit Prince


function displayBookEnglish() {
  bookTitle = "The Little Prince";
  console.log(bookTitle); // The Little Prince
}

displayBookEnglish();
console.log(bookTitle); // The Little Prince