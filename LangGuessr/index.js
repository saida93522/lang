const franc = require('franc')
const langs = require('langs');
const colors = require('colors')
const userCode = process.argv[2] // afr
const langCode = franc(userCode);
if (langCode === "und") {
    console.log("Sorry,couldn't find language name, try different language");
} else {
    const langName = langs.where("3", langCode);
    console.log(`Our best guess is: ${langName.name}`.green);
}

