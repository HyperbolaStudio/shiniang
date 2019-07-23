const fs = require('fs');
const getHtml = require('./get_html');
const list = JSON.parse(fs.readFileSync('./list.json').toString());
for(let frdName in list.items){
    const srcName = list.items[frdName];
    const html = getHtml(srcName,frdName);
    fs.writeFileSync(`./${srcName}/index.html`,html);
}