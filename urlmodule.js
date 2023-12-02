import url from "url";

const myURL = new URL("https://example.org");
myURL.pathname = "/a/b/c";
myURL.search = "?d=e";
myURL.hash = "#fgh";

console.log(myURL);

console.log(myURL.href);

// const myURL = new URL("https://example.org:81/foo");
console.log(myURL.host);
