// I ACTUALLY GOT THIS IN AN INTERVIEW
// create a URL shortener like bit.ly/
// Write a function urlShortener(longUrl), which receives a long URL and returns an URL consisting only of lowercase letters (and one dot and one slash).
var urlDatabase = {}

function urlShortener(longURL) {
  let domain = longURL.substr(longURL.indexOf('.') + 1);
  let path = address.substr(address.indexOf('/') + 1);
  let parameters = path.substr(path.indexOf('/') + 1);

}

var generateHashKey = (code) => {
}

// function urlRedirector(shortURL) {

// }
let shortUrl1 = urlShortener("https://www.codewars.com/kata/5ef9ca8b76be6d001d5e1c3e"); //codewars.com/kata232
let shortUrl2 = urlShortener("https://www.codewars.com/kata/5efae11e2d12df00331f91a6");
console.log({shortUrl1, shortUrl2, urlDatabase}) // should show different shortened URLS as well as the full database

let shortUrl1 = urlShortener("https://www.codewars.com/kata/5ef9c85dc41b4e000f9a645f");
let shortUrl2 = urlShortener("https://www.codewars.com/kata/5ef9c85dc41b4e000f9a645f");
console.log(shortUrl1 === shortUrl2) // should be true