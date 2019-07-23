const commander = require('commander');
commander
    .version('1.0.0b')
    .option('-s, --src <name>','src name')
    .option('-f, --friendly [name]','friendly name')
    .option('-a, --alias [name,name...]','alias names')
    .parse(process.argv);
const getHtml = require('./get_html');
const fs = require('fs');
let srcName = commander.src;
let frdName = typeof(commander.friendly)=='string'?commander.friendly:srcName;
let aliasName = typeof(commander.alias)=='string'?commander.alias.split(','):[];
fs.mkdir(srcName,(err) => {
    if(err){
        console.log(err);
        process.exit(1);
    }
    let list = JSON.parse(fs.readFileSync('./list.json').toString());
    list.items[frdName] = srcName;
    list.redirect[frdName] = aliasName;
    fs.writeFileSync('./list.json',JSON.stringify(list));
    let html = getHtml(srcName,frdName);
    fs.writeFileSync(`./${srcName}/index.html`,html);
    fs.writeFileSync(`./${srcName}/article.md`,'');
    fs.writeFileSync(`./${srcName}/aside.md`,'');
});