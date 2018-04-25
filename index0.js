const crypto = require ("crypto");
var str = "Hello, everyone!";
var result = crypto.createHash("sha256").update(str).digest("hex");
console.log("str: " + str + ", result: " + result);
