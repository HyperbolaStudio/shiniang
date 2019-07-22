const commander = require('commander');
commander
    .version('1.0.0b')
    .option('-s, --src <name>','src name')
    .option('-f, --friendly [name]','friendly name')
    .option('-a, --alias [name,name...]','alias names')
    .parse(process.argv);
const fs = require('fs');
let srcName = commander.src;
let frdName = commander.friendly?commander.friendly:srcName;
let aliasName = commander.alias?commander.alias.split(','):[];
fs.mkdir(srcName,(err) => {
    if(err){
        console.log(err);
        process.exit(1);
    }
    let list = JSON.parse(fs.readFileSync('./list.json').toString());
    list.items[frdName] = srcName;
    list.redirect[frdName] = aliasName;
    fs.writeFileSync('./list.json',JSON.stringify(list));
    let html = `
<html>
    <head>
        <meta charset='utf-8'>
        <title>${frdName}</title>
        <meta name='-1:article-src' content="${srcName}">
        <link rel="stylesheet" href="/css/layout.css">
        <link rel="stylesheet" href="/css/article.css">
        <link rel="stylesheet" href="/css/global.css">
        <meta name="viewport" content="width=device-width,minimum-scale=1.0,initial-scale=1,user-scalable=no">
    </head>
    <body>
        <header>
            <h1>-1娘的破站</h1>
        </header>
        <h1>${frdName}</h1>
        <div id='main'>
            <aside class='markdown-body'>

            </aside>
            <article class='markdown-body'>

            </article> 
             
        </div>
        <footer>
            <div>除非另有说明，否则本站内容使用<a href="https://github.com/HyperbolaStudio/shiniang/blob/master/LICENSE">CC BY-SA 4.0协议</a>共享</div>
            <div>(c)Hyperbola Studio</div>
            <div><a href='/opensource.txt'>开源协议</a></div>
        </footer>
        <script src='/dist/bundle.js'></script>
    </body>
</html>`;
    fs.writeFileSync(`./${srcName}/index.html`,html);
    fs.writeFileSync(`./${srcName}/article.md`,'');
    fs.writeFileSync(`./${srcName}/aside.md`,'');
});