const path = require("path");

a = path.basename("c:\\temp\\myfile.html");
console.log(a);

b = path.dirname("/foo/bar/baz/asdf/quux");
console.log(b);

c = path.extname(__filename);
console.log(c);
